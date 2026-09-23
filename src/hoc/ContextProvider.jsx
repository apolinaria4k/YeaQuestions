import { QuestionsContext } from '../context';
import { useState } from 'react';

export const ContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState({});
  return (
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      {children}
    </QuestionsContext.Provider>
  );
};
