import { useMemo } from 'react';

export const useQuestions = (questions, value) => {
  const filteredQuestions = useMemo(() => {
    return questions.filter((question) =>
      question.title.toLowerCase().includes(value.toLowerCase()),
    );
  }, [questions, value]);

  return filteredQuestions;
};
