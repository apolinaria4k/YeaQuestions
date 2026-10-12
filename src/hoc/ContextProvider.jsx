import { QuestionsContext } from '../context';
import { useState } from 'react';

export const ContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loadedPage, setLoadedPage] = useState(null);
  const [listStatus, setListStatus] = useState('idle');
  const [listError, setListError] = useState(null);
  const [retryTick, setRetryTick] = useState(0);

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        setQuestions,
        totalPages,
        setTotalPages,
        loadedPage,
        setLoadedPage,
        listStatus,
        setListStatus,
        listError,
        setListError,
        retryTick,
        setRetryTick,
      }}>
      {children}
    </QuestionsContext.Provider>
  );
};
