import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import QuestionService from '../../API/QuestionService';
import { useDebounce } from '../../hooks/useDebounce';
import { useFetching } from '../../hooks/useFetching';
import useQuestions from '../../hooks/useQuestions';
import Aside from '../aside/Aside';
import Section from '../section/Section';
import { getTotalPages } from '../utils/pages';
import classes from './Main.module.css';

export default function Main() {
  const { setQuestions } = useQuestions();
  const [isVisible, setIsVisible] = useState(false);
  // const [totalPages, setTotalPages] = useState(0);
  const [skillsAndSpec, setSkillsAndSpec] = useState({ skills: [], specializations: [] });
  const [totals, setTotals] = useState({ totalSpec: 5, totalSkills: 8 });
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const value = searchParams.get('value') || '';
  const specialization = Number(searchParams.get('specialization')) || null;
  const skills = searchParams.get('skills') || '';
  const complexity = searchParams.get('complexity') || '';
  const rate = searchParams.get('rate') || '';

  const debouncedValue = useDebounce(value, 400);

  const setTotalPages = (total) => {
    const next = new URLSearchParams(searchParams);
    next.set('totalPages', String(total));
    setSearchParams(next);
  };

  const [fetchQuestions, status, error] = useFetching(
    async (page, title, specialization, skills, complexity, rate, signal) => {
      const response = await QuestionService.getAllQuestions(
        page,
        title,
        specialization,
        skills,
        complexity,
        rate,
        signal,
      );
      setQuestions(response.data.data);
      // console.log(response.data);

      const totalCount = response.data.total;
      setTotalPages(getTotalPages(totalCount));
    },
  );

  const [fetchSpecializations] = useFetching(async () => {
    const response = await QuestionService.getAllSpecializations();
    setSkillsAndSpec((prev) => ({
      ...prev,
      specializations: response.data.data,
    }));
    const totalCount = response.data.total;
    setTotals((prev) => ({ ...prev, totalSpec: totalCount }));
  });

  const [fetchSkills] = useFetching(async () => {
    const response = await QuestionService.getAllSkills();
    setSkillsAndSpec((prev) => ({
      ...prev,
      skills: response.data.data,
    }));
    const totalCount = response.data.total;
    setTotals((prev) => ({ ...prev, totalSkills: totalCount }));
  });

  useEffect(() => {
    const controller = new AbortController();

    fetchQuestions(
      page,
      debouncedValue,
      specialization,
      skills,
      complexity,
      rate,
      controller.signal,
    );

    return () => {
      controller.abort();
    };
  }, [page, debouncedValue, specialization, skills, complexity, rate]);

  useEffect(() => {
    fetchSpecializations();
    fetchSkills();
  }, []);

  return (
    <>
      <main className={classes.main}>
        <div className={classes.wrapperMain}>
          <Section setIsVisible={setIsVisible} status={status} error={error} />
          <Aside
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            totals={totals}
            skillsAndSpec={skillsAndSpec}
            setSkillsAndSpec={setSkillsAndSpec}></Aside>
        </div>
      </main>
    </>
  );
}
