import { useEffect, useState } from 'react';
import QuestionService from '../../API/QuestionService';
import { useFetching } from '../../hooks/useFetching';
import Aside from '../aside/Aside';
import Section from '../section/Section';
import { getTotalPages } from '../utils/pages';
import classes from './Main.module.css';
import { useQuestions } from '../../hooks/useQuestions';

export default function Main() {
  const [questions, setQuestions] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [specializations, setSpecializations] = useState([]);
  const [totalSpec, setTotalSpec] = useState(10);
  const [skills, setSkills] = useState([]);
  const [totalSkills, setTotalSkills] = useState(10);
  const [value, setValue] = useState('');
  const filteredQuestions = useQuestions(questions, value);

  const [fetchQuestions, isLoading, error] = useFetching(async (limit, page) => {
    const response = await QuestionService.getAllQuestions(limit, page);
    setQuestions([...questions, ...response.data.data]);
    const totalCount = response.data.total;
    setTotalPages(getTotalPages(totalCount, limit));
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
    fetchQuestions(limit, page);
  }, [page, limit]);

  useEffect(() => {
    fetchSpecializations();
  }, []);

  useEffect(() => {
    fetchSkills();
  }, []);

  // useEffect(() => {
  //   const fetchQuestions = async () => {
  //     const response = await axios.get('https://api.yeatwork.ru/questions/public-questions');
  //     const data = response.data;
  //     console.log(response.data);
  //     setQuestions(data.data);
  //     setFilteredQuestions(data.data);
  //   };

  //   const fetchSpecializations = async () => {
  //     const response = await axios.get('https://api.yeatwork.ru/specializations');
  //     const data = response.data;
  //     // console.log(response.data);
  //     setSpecializations(data.data);
  //   };

  //   const fetchSkills = async () => {
  //     const response = await axios.get('https://api.yeatwork.ru/skills');
  //     const data = response.data;
  //     setSkills(data.data);
  //   };

  //   fetchQuestions();
  //   fetchSpecializations();
  //   fetchSkills();
  // }, []);

  // useEffect(() => {
  //   const fQuestions = questions.filter((que) =>
  //     que.title.toLowerCase().includes(value.toLowerCase()),
  //   );
  //   setFilteredQuestions(fQuestions);
  // }, [value]);

  return (
    <>
      <main className={classes.main}>
        <div className={classes.wrapperMain}>
          <Section questions={filteredQuestions}></Section>
          <Aside
            value={value}
            setValue={setValue}
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
