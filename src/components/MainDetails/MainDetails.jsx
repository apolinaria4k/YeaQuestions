import classes from './MainDetails.module.css';

import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import QuestionService from '../../API/QuestionService';
import { useFetching } from '../../hooks/useFetching';
import AsideDetailedQuestion from '../AsideDetailedQuestion/AsideDetailedQuestion';
import SectionDetailedQuestion from '../SectionDetailedQuestion/SectionDetailedQuestion';

export default function MainDetails() {
  const { questionId } = useParams();
  const [questionData, setQuestionData] = useState([]);

  const [fetchQuestionData, status] = useFetching(async (questionId) => {
    const response = await QuestionService.getQuestionById(questionId);
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
      <div className={classes.wrapperMain}>
        {status === 'idle' || status === 'loading' ? (
          <h1>Loading...</h1>
        ) : (
          <>
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
          </>
        )}
      </div>
    </main>
  );
}
