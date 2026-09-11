import { useEffect, useState } from 'react';
import QuestionService from '../../API/QuestionService';
import { useFetching } from '../../hooks/useFetching';
import { useQuestions } from '../../hooks/useQuestions';
import Aside from '../aside/Aside';
import Section from '../section/Section';
import { getTotalPages } from '../utils/pages';
import classes from './Main.module.css';

export default function Main() {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [specializations, setSpecializations] = useState([]);
  const [totalSpec, setTotalSpec] = useState(10);
  const [skills, setSkills] = useState([]);
  const [totalSkills, setTotalSkills] = useState(10);
  const [filter, setFilter] = useState({ value: '', specializations: [] });
  // const filteredQuestions = useQuestions(questions, filter.value, filter.specializations);

  const [fetchQuestions, isLoading, error] = useFetching(async (page, title, specializationIds) => {
    const response = await QuestionService.getAllQuestions(page, title, specializationIds);
    setQuestions(response.data.data);
    const totalCount = response.data.total;
    console.log(response.data);
    setTotalPages(getTotalPages(totalCount));
  });

  const [fetchSpecializations] = useFetching(async () => {
    const response = await QuestionService.getAllSpecializations();
    setSpecializations([...specializations, ...response.data.data]);
    const totalCount = response.data.total;
    setTotalSpec(totalCount);
  });

  const [fetchSkills] = useFetching(async () => {
    const response = await QuestionService.getAllSkills();
    setSkills([...skills, ...response.data.data]);
    const totalCount = response.data.total;
    setTotalSkills(totalCount);
  });

  useEffect(() => {
    fetchQuestions(page, filter.value, filter.specializations);
  }, [page, filter]);

  useEffect(() => {
    fetchSpecializations();
    fetchSkills();
  }, []);

  useEffect(() => {
    console.log(filter.specializations);
  }, [filter.specializations]);

  const changePage = (page) => {
    setPage(page);
  };

  const changeSpecialization = (specialization) => {
    setFilter((prev) => {
      const exists = prev.specializations.includes(specialization);

      return {
        ...prev,
        specializations: exists
          ? prev.specializations.filter((s) => s !== specialization)
          : [...prev.specializations, specialization],
      };
    });
  };

  return (
    <>
      <main className={classes.main}>
        <div className={classes.wrapperMain}>
          <Section
            page={page}
            changePage={changePage}
            totalPages={totalPages}
            error={error}
            isLoading={isLoading}
            questions={questions}></Section>
          <Aside
            filter={filter}
            setValue={setFilter}
            changeSpecialization={changeSpecialization}
            totalSkills={totalSkills}
            totalSpec={totalSpec}
            specializations={specializations}
            setSpecializations={setSpecializations}
            skills={skills}
            setSkills={setSkills}></Aside>
        </div>
      </main>
    </>
  );
}
