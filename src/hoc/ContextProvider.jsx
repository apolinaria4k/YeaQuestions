import { QuestionsContext } from '../context';
import { useState } from 'react';

export const ContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [loadedPage, setLoadedPage] = useState(null);
  return (
    <QuestionsContext.Provider value={{ questions, setQuestions, loadedPage, setLoadedPage }}>
      {children}
    </QuestionsContext.Provider>
  );
};
