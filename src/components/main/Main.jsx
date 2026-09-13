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
    skills: [],
    complexities: [],
    rates: [],
  });
  // const filteredQuestions = useQuestions(questions, filter.value, filter.specializations);

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
      console.log(response.data);
      const totalCount = response.data.total;
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
      filter.skills,
      filter.complexities,
      filter.rates,
    );
  }, [page, filter]);

  useEffect(() => {
    fetchSpecializations();
    fetchSkills();
  }, []);

  useEffect(() => {
    console.log(filter.rates);
  }, [filter]);

  const changePage = (page) => {
    setPage(page);
  };

  const changeSpecialization = (specialization) => {
    filter.specialization === specialization
      ? setFilter((prev) => ({ ...prev, specialization: null }))
      : setFilter((prev) => ({ ...prev, specialization: specialization }));
  };

  const changeSkill = (skill) => {
    if (filter.skills.includes(skill)) {
      let filteredSkills = filter.skills.filter((s) => s !== skill);
      setFilter((prev) => ({ ...prev, skills: filteredSkills }));
    } else {
      setFilter((prev) => ({ ...prev, skills: [...prev.skills, skill] }));
    }
  };

  const changeComplexity = (complexity) => {
    let matches = filter.complexities.filter((item) => complexity.includes(item));
    if (matches.length) {
      let filteredComplexity = filter.complexities.filter((item) => !complexity.includes(item));
      setFilter((prev) => ({ ...prev, complexities: filteredComplexity }));
    } else {
      setFilter((prev) => ({ ...prev, complexities: [...prev.complexities, ...complexity] }));
    }
  };

  const changeRate = (rate) => {
    if (filter.rates.includes(rate)) {
      let filteredRates = filter.rates.filter((s) => s !== rate);
      setFilter((prev) => ({ ...prev, rates: filteredRates }));
    } else {
      setFilter((prev) => ({ ...prev, rates: [...prev.rates, rate] }));
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
