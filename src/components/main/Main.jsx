import { useEffect, useReducer, useState } from 'react';
import QuestionService from '../../API/QuestionService';
import { useFetching } from '../../hooks/useFetching';
import Aside from '../aside/Aside';
import Section from '../section/Section';
import { getTotalPages } from '../utils/pages';
import classes from './Main.module.css';
import filterReducer from '../utils/filterReducer';

export default function Main() {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [skillsAndSpec, setSkillsAndSpec] = useState({ skills: [], specializations: [] });
  const [totals, setTotals] = useState({ totalSpec: 10, totalSkills: 10 });
  const initialFilter = {
    value: '',
    specialization: null,
    skills: [],
    complexities: [],
    rates: [],
  };
  const [filter, dispatch] = useReducer(filterReducer, initialFilter);

  const [fetchQuestions, isLoading, error] = useFetching(
    async (page, title, specialization, skills, complexities, rates) => {
      const response = await QuestionService.getAllQuestions(
        page,
        title,
        specialization,
        skills,
        complexities,
        rates,
      );
      setQuestions(response.data.data);
      const totalCount = response.data.total;
      console.log(response.data);
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
    fetchQuestions(
      page,
      filter.value,
      filter.specialization,
      filter.skills,
      filter.complexities,
      filter.rates,
    );
  }, [page, filter]);

  useEffect(() => {
    fetchSpecializations();
    fetchSkills();
  }, []);

  const changePage = (page) => {
    setPage(page);
  };

  const changeValue = (value) => {
    dispatch({
      type: 'value',
      value: value,
    });
  };

  const changeSpecialization = (specialization) => {
    dispatch({
      type: 'specialization',
      specialization: specialization,
    });
  };

  const changeSkill = (skill) => {
    if (filter.skills.includes(skill)) {
      let filteredSkills = filter.skills.filter((s) => s !== skill);
      dispatch({
        type: 'skill',
        skill: filteredSkills,
      });
    } else {
      dispatch({
        type: 'skill',
        skill: [...filter.skills, skill],
      });
    }
  };

  const changeComplexity = (complexity) => {
    let matches = filter.complexities.filter((item) => complexity.includes(item));
    if (matches.length) {
      let filteredComplexity = filter.complexities.filter((item) => !complexity.includes(item));
      dispatch({
        type: 'complexity',
        complexity: filteredComplexity,
      });
    } else {
      dispatch({
        type: 'complexity',
        complexity: [...filter.complexities, ...complexity],
      });
    }
  };

  const changeRate = (rate) => {
    if (filter.rates.includes(rate)) {
      let filteredRates = filter.rates.filter((s) => s !== rate);
      dispatch({
        type: 'rate',
        rate: filteredRates,
      });
    } else {
      dispatch({
        type: 'rate',
        rate: [...filter.rates, rate],
      });
    }
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
