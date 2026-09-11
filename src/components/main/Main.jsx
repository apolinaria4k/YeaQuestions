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
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [specializations, setSpecializations] = useState([]);
  const [totalSpec, setTotalSpec] = useState(10);
  const [skills, setSkills] = useState([]);
  const [totalSkills, setTotalSkills] = useState(10);
  const [value, setValue] = useState('');
  const filteredQuestions = useQuestions(questions, value);

  const [fetchQuestions, isLoading, error] = useFetching(async (page) => {
    const response = await QuestionService.getAllQuestions(page);
    setQuestions(response.data.data);
    const totalCount = response.data.total;
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
    fetchQuestions(page);
  }, [page]);

  useEffect(() => {
    fetchSpecializations();
    fetchSkills();
  }, []);

  const changePage = (page) => {
    setPage(page);
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
            questions={filteredQuestions}></Section>
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
