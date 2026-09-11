import { useMemo } from 'react';

// export const useFilterBySpecializations = (questions, specializations) => {
//   const specQuestions = useMemo(() => {
//     if (!specializations || specializations.length === 0) {
//       return questions;
//     }

//     const lower = specializations.map((s) => s.toLowerCase());

//     return questions.filter((question) =>
//       question.questionSpecializations.some((item) => lower.includes(item.title.toLowerCase())),
//     );
//   }, [questions, specializations]);

//   return specQuestions;
// };

export const useQuestions = (questions, value, specializations) => {
  // const specQuestions = useFilterBySpecializations(questions, specializations);

  // const filteredQuestions = useMemo(() => {
  //   return specQuestions.filter((question) =>
  //     question.title.toLowerCase().includes(value.toLowerCase()),
  //   );
  // }, [specQuestions, value]);

  return filteredQuestions;
};
