import classes from './MainDetails.module.css';

import SectionDetailedQuestion from '../SectionDetailedQuestion/SectionDetailedQuestion';
import AsideDetailedQuestion from '../AsideDetailedQuestion/AsideDetailedQuestion';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useFetching } from '../../hooks/useFetching';
import QuestionService from '../../API/QuestionService';

export default function MainDetails() {
  const { questionId } = useParams();
  const [questionData, setQuestionData] = useState([]);

  const [fetchQuestionData, status] = useFetching(async (questionId) => {
    const response = await QuestionService.getQuestionById(questionId);
    console.log(response);
    setQuestionData(response.data);
  });

  useEffect(() => {
    fetchQuestionData(questionId);
  }, [questionId]);

  return (
    <main className={classes.main}>
      <div className={classes.linkWrapper}>
        <Link to="/" className={classes.link}>
          Назад
        </Link>
      </div>
      {status === 'idle' || status === 'loading' ? (
        <h1>Loading...</h1>
      ) : (
        <div className={classes.wrapperMain}>
          <SectionDetailedQuestion
            title={questionData.title}
            description={questionData.description}
            shortAnswer={questionData.shortAnswer}
            longAnswer={questionData.longAnswer}
          />
          <AsideDetailedQuestion
            complexity={questionData.complexity}
            rate={questionData.rate}
            questionSkills={questionData.questionSkills}
            keywords={questionData.keywords}
          />
        </div>
      )}
    </main>
  );
}
