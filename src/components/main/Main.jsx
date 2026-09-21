import { useEffect, useReducer, useState } from 'react';
import QuestionService from '../../API/QuestionService';
import { useFetching } from '../../hooks/useFetching';
import Aside from '../aside/Aside';
import Section from '../section/Section';
import { getTotalPages } from '../utils/pages';
import classes from './Main.module.css';
import filterReducer from '../utils/filterReducer';
import { useDebounce } from '../../hooks/useDebounce';
import { useSearchParams } from 'react-router-dom';

export default function Main() {
  const [searchParams, setSearchParams] = useSearchParams();
  const skillId = searchParams.get('skillId') || null;
  const [isVisible, setIsVisible] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [skillsAndSpec, setSkillsAndSpec] = useState({ skills: [], specializations: [] });
  const [totals, setTotals] = useState({ totalSpec: 5, totalSkills: 8 });
  const initialFilter = {
    value: '',
    specialization: null,
    skills: [],
    complexity: [],
    rate: [],
  };
  const [filter, dispatch] = useReducer(filterReducer, initialFilter);
  const debouncedValue = useDebounce(filter.value, 400);
  console.log(skillId);

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
      console.log(response.data);

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
      filter.specialization,
      filter.skills,
      filter.complexity,
      filter.rate,
      controller.signal,
    );

    return () => {
      controller.abort();
    };
  }, [page, debouncedValue, filter.specialization, filter.skills, filter.complexity, filter.rate]);

  useEffect(() => {
    fetchSpecializations();
    fetchSkills();
  }, []);

  const handleClickPage = (page) => {
    setPage(page);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const updateFilter = (action) => {
    setPage(1);
    dispatch(action);
  };

  const changeValue = (value) => {
    updateFilter({
      type: 'value',
      value: value,
    });
  };

  const changeSpecialization = (specialization) => {
    updateFilter({
      type: 'specialization',
      specialization: specialization,
    });
  };

  const changeSkill = (skill) => {
    const newSkills = filter.skills.includes(skill)
      ? filter.skills.filter((s) => s !== skill)
      : [...filter.skills, skill];
    updateFilter({
      type: 'skill',
      skill: newSkills,
    });
  };

  const changeComplexity = (complexity) => {
    let matches = filter.complexity.filter((item) => complexity.includes(item));
    if (matches.length) {
      let filteredComplexity = filter.complexity.filter((item) => !complexity.includes(item));
      updateFilter({
        type: 'complexity',
        complexity: filteredComplexity,
      });
    } else {
      updateFilter({
        type: 'complexity',
        complexity: [...filter.complexity, ...complexity],
      });
    }
  };

  const changeRate = (rate) => {
    const newRates = filter.rate.includes(rate)
      ? filter.rate.filter((s) => s !== rate)
      : [...filter.rate, rate];
    updateFilter({
      type: 'rate',
      rate: newRates,
    });
  };

  useEffect(() => {
    if (!skillId) return;

    changeSkill(skillId);
  }, [skillId]);

  return (
    <>
      <main className={classes.main}>
        <div className={classes.wrapperMain}>
          <Section
            setIsVisible={setIsVisible}
            page={page}
            handleClickPage={handleClickPage}
            handleNextPage={handleNextPage}
            handlePreviousPage={handlePreviousPage}
            totalPages={totalPages}
            status={status}
            error={error}
            questions={questions}></Section>
          <Aside
            isVisible={isVisible}
            setIsVisible={setIsVisible}
            filter={filter}
            changeValue={changeValue}
            changeSpecialization={changeSpecialization}
            changeSkill={changeSkill}
            changeComplexity={changeComplexity}
            changeRate={changeRate}
            totals={totals}
            skillsAndSpec={skillsAndSpec}
            setSkillsAndSpec={setSkillsAndSpec}></Aside>
        </div>
      </main>
    </>
  );
}
