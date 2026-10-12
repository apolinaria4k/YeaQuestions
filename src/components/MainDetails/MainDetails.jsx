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
import NotFound from '../NotFound/NotFound';

export default function MainDetails() {
  const location = useLocation();
  const { setQuestions, setLoadedPage, setTotalPages, setListStatus, setListError, retryTick } =
    useQuestions();
  const { questionId } = useParams();
  const [questionData, setQuestionData] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const value = searchParams.get('value') || '';
  const specialization = Number(searchParams.get('specialization')) || null;
  const skills = searchParams.get('skills') || '';
  const complexity = searchParams.get('complexity') || '';
  const rate = searchParams.get('rate') || '';

  const [fetchQuestions, questionsStatus, questionsError] = useFetching(
    async (page, title, specialization, skills, complexity, rate, signal, isActual) => {
      const response = await QuestionService.getAllQuestions(
        page,
        title,
        specialization,
        skills,
        complexity,
        rate,
        signal,
      );

      if (signal?.aborted) {
        return;
      }

      if (!isActual()) {
        return;
      }

      setQuestions(response.data.data);
      setLoadedPage(page);
      const totalCount = response.data.total;
      setTotalPages(getTotalPages(totalCount));
    },
  );

  const [fetchQuestionData, status, error] = useFetching(async (questionId) => {
    const response = await QuestionService.getQuestionById(questionId);
    setQuestionData(response.data);
  });

  useEffect(() => {
    setListStatus(questionsStatus);
    setListError(questionsError);
  }, [questionsStatus, questionsError]);

  useEffect(() => {
    const controller = new AbortController();
    fetchQuestions(page, value, specialization, skills, complexity, rate, controller.signal);

    return () => {
      controller.abort();
    };
  }, [page, retryTick]);

  useEffect(() => {
    fetchQuestionData(questionId);
  }, [questionId]);

  let content;

  if (status === 'idle' || status === 'loading') {
    content = <h1>Loading...</h1>;
  } else if (status === 'error') {
    content =
      error?.response?.status === 404 ? (
        <h1>Вопрос не найден</h1>
      ) : (
        <>
          <h1>Не удалось загрузить вопрос</h1>
          <button
            className={classes.repeatButton}
            onClick={() => {
              fetchQuestionData(questionId);
            }}>
            Повторить
          </button>
        </>
      );
  } else if (!questionData) {
    content = <NotFound />;
  } else {
    content = (
      <>
        <SectionDetailedQuestion
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
    );
  }

  return (
    <main className={classes.main}>
      <div className={classes.linkWrapper}>
        <Link to={{ pathname: '/', search: location.search }} className={classes.link}>
          Назад
        </Link>
      </div>
      <div className={classes.wrapperMain}>{content}</div>
    </main>
  );
}
