import axios from 'axios';
import { useContext, useEffect } from 'react';
import Aside from '../aside/Aside';
import Section from '../section/Section';
import classes from './Main.module.css';
import { Context } from '../../context';

export default function Main() {
  const {
    questions,
    setQuestions,
    filteredQuestions,
    setFilteredQuestions,
    setSpecializations,
    setSkills,
    value,
  } = useContext(Context);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get('https://api.yeatwork.ru/questions/public-questions');
      const data = response.data;
      // console.log(response.data.data);
      setQuestions(data.data);
      setFilteredQuestions(data.data);
    };

    const fetchSpecializations = async () => {
      const response = await axios.get('https://api.yeatwork.ru/specializations');
      const data = response.data;
      // console.log(response.data);
      setSpecializations(data.data);
    };

    const fetchSkills = async () => {
      const response = await axios.get('https://api.yeatwork.ru/skills');
      const data = response.data;
      setSkills(data.data);
    };

    fetchQuestions();
    fetchSpecializations();
    fetchSkills();
  }, []);

  useEffect(() => {
    const fQuestions = questions.filter((que) =>
      que.title.toLowerCase().includes(value.toLowerCase()),
    );
    setFilteredQuestions(fQuestions);
  }, [value]);

  return (
    <>
      <main className={classes.main}>
        <div className={classes.wrapperMain}>
          <Section questions={filteredQuestions}></Section>
          <Aside></Aside>
        </div>
      </main>
    </>
  );
}
