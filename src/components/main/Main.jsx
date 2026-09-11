import { useEffect, useState } from 'react';
import QuestionService from '../../API/QuestionService';
import { useFetching } from '../../hooks/useFetching';
import Aside from '../aside/Aside';
import Section from '../section/Section';
import { getTotalPages } from '../utils/pages';
import classes from './Main.module.css';

export default function Main() {
  const [questions, setQuestions] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [specializations, setSpecializations] = useState([]);
  // const [totalSpec, setTotalSpec] = useState(10);
  // const [totalSkills, setTotalSkills] = useState(10);
  const [totals, setTotals] = useState({ totalSpec: 10, totalSkills: 10 });
  const [skills, setSkills] = useState([]);

  const [filter, setFilter] = useState({
    value: '',
    specialization: null,
    skill: null,
    complexity: [],
    rate: [],
  });
  // const filteredQuestions = useQuestions(questions, filter.value, filter.specializations);

  const [fetchQuestions, isLoading, error] = useFetching(
    async (page, title, specialization, skill, complexity, rate) => {
      const response = await QuestionService.getAllQuestions(
        page,
        title,
        specialization,
        skill,
        complexity,
        rate,
      );
      setQuestions(response.data.data);
      const totalCount = response.data.total;
      console.log(response.data);
      setTotalPages(getTotalPages(totalCount));
    },
  );

  const [fetchSpecializations] = useFetching(async () => {
    const response = await QuestionService.getAllSpecializations();
    setSpecializations([...specializations, ...response.data.data]);
    const totalCount = response.data.total;
    setTotals((prev) => ({ ...prev, totalSpec: totalCount }));
  });

  const [fetchSkills] = useFetching(async () => {
    const response = await QuestionService.getAllSkills();
    setSkills([...skills, ...response.data.data]);
    const totalCount = response.data.total;
    setTotals((prev) => ({ ...prev, totalSkills: totalCount }));
  });

  useEffect(() => {
    fetchQuestions(
      page,
      filter.value,
      filter.specialization,
      filter.skill,
      filter.complexity,
      filter.rate,
    );
  }, [page, filter]);

  useEffect(() => {
    fetchSpecializations();
    fetchSkills();
  }, []);

  useEffect(() => {
    console.log(filter.rate);
  }, [filter]);

  const changePage = (page) => {
    setPage(page);
  };

  const changeSpecialization = (specialization) => {
    setFilter((prev) => ({ ...prev, specialization: specialization }));
  };

  const changeSkill = (skill) => {
    setFilter((prev) => ({ ...prev, skill: skill }));
  };

  const changeComplexity = (complexity) => {
    setFilter((prev) => ({ ...prev, complexity: complexity }));
  };

  const changeRate = (rate) => {
    setFilter((prev) => ({ ...prev, rate: rate }));
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
            changeSkill={changeSkill}
            changeComplexity={changeComplexity}
            changeRate={changeRate}
            totals={totals}
            specializations={specializations}
            setSpecializations={setSpecializations}
            skills={skills}
            setSkills={setSkills}></Aside>
        </div>
      </main>
    </>
  );
}
