import { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import { Context } from './context';
export default function App() {
  const [questions, setQuestions] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [specializations, setSpecializations] = useState([]);
  const [skills, setSkills] = useState([]);
  const [value, setValue] = useState('');

  return (
    <>
      <Context.Provider
        value={{
          questions,
          setQuestions,
          filteredQuestions,
          setFilteredQuestions,
          specializations,
          setSpecializations,
          skills,
          setSkills,
          value,
          setValue,
        }}>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </Context.Provider>
    </>
  );
}
