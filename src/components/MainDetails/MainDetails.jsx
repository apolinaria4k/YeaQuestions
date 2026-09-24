import classes from './MainDetails.module.css';
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import QuestionService from '../../API/QuestionService';
import { useFetching } from '../../hooks/useFetching';
import AsideDetailedQuestion from '../AsideDetailedQuestion/AsideDetailedQuestion';
import SectionDetailedQuestion from '../SectionDetailedQuestion/SectionDetailedQuestion';
import useQuestions from '../../hooks/useQuestions';
import { getTotalPages } from '../utils/pages';
import { useLocation } from 'react-router-dom';

export default function MainDetails() {
  const location = useLocation();
  const { questions, setQuestions, loadedPage, setLoadedPage } = useQuestions();
  const { questionId } = useParams();
  const [questionData, setQuestionData] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const value = searchParams.get('value') || '';
  const specialization = Number(searchParams.get('specialization')) || null;
  const skills = searchParams.get('skills') || '';
  const complexity = searchParams.get('complexity') || '';
  const rate = searchParams.get('rate') || '';
  const totalPages = Number(searchParams.get('totalPages')) || 0;

  const setTotalPages = (total) => {
    const next = new URLSearchParams(searchParams);
    next.set('totalPages', String(total));
    setSearchParams(next);
  };

  const [fetchQuestions] = useFetching(
    async (page, title, specialization, skills, complexity, rate) => {
      const response = await QuestionService.getAllQuestions(
        page,
        title,
        specialization,
        skills,
        complexity,
        rate,
      );

      setQuestions(response.data.data);
      setLoadedPage(page);
      console.log(response.data);
      const totalCount = response.data.total;
      setTotalPages(getTotalPages(totalCount));
    },
  );

  const [fetchQuestionData, status] = useFetching(async (questionId) => {
    const response = await QuestionService.getQuestionById(questionId);
    setQuestionData(response.data);
  });

  useEffect(() => {
    fetchQuestions(page, value, specialization, skills, complexity, rate);
  }, [page]);

  useEffect(() => {
    fetchQuestionData(questionId);
  }, [questionId]);

  return (
    <main className={classes.main}>
      <div className={classes.linkWrapper}>
        <Link to={{ pathname: '/', search: location.search }} className={classes.link}>
          Назад
        </Link>
      </div>
      <div className={classes.wrapperMain}>
        {status === 'idle' || status === 'loading' ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <SectionDetailedQuestion
              totalPages={totalPages}
              setIsVisible={setIsVisible}
              title={questionData.title}
              description={questionData.description}
              shortAnswer={questionData.shortAnswer}
              longAnswer={questionData.longAnswer}
            />
            <AsideDetailedQuestion
              isVisible={isVisible}
              setIsVisible={setIsVisible}
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
