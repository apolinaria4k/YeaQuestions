import { useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import useQuestions from '../../hooks/useQuestions';
import classes from './NextPreviousButtons.module.css';

export default function NextPreviousButtons() {
  const location = useLocation();
  const { questions, loadedPage } = useQuestions();
  const { questionId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const totalPages = Number(searchParams.get('totalPages')) || 0;
  const navigate = useNavigate();
  const pendingRef = useRef(null);

  useEffect(() => {
    if (pendingRef.current === null) return;

    if (loadedPage === pendingRef.current.targetPage && questions.length) {
      const { position } = pendingRef.current;
      const id = position === 'first' ? questions[0].id : questions[questions.length - 1].id;
      navigate({
        pathname: `/questions/${id}`,
        search: location.search,
      });

      pendingRef.current = null;
    }
  }, [loadedPage, questions]);

  const changePage = (page) => {
    const next = new URLSearchParams(searchParams);
    next.set('page', String(page));
    setSearchParams(next);
  };

  const handlePrevClick = () => {
    if (pendingRef.current !== null) return;
    if (!questions.length) return;
    const currentIndex = questions.findIndex((q) => q.id === Number(questionId));
    if (currentIndex === -1) {
      navigate({
        pathname: `/questions/${questions[questions.length - 1].id}`,
        search: location.search,
      });
    } else if (currentIndex > 0) {
      navigate({
        pathname: `/questions/${questions[currentIndex - 1].id}`,
        search: location.search,
      });
    } else if (currentIndex === 0) {
      const targetPage = page > 1 ? page - 1 : totalPages;
      pendingRef.current = { targetPage, position: 'last' };
      changePage(targetPage);
    }
  };

  const handleNextClick = () => {
    if (pendingRef.current !== null) return;
    if (!questions.length) return;
    const currentIndex = questions.findIndex((q) => q.id === Number(questionId));
    if (currentIndex === -1) {
      navigate({
        pathname: `/questions/${questions[0].id}`,
        search: location.search,
      });
    } else if (currentIndex < questions.length - 1) {
      navigate({
        pathname: `/questions/${questions[currentIndex + 1].id}`,
        search: location.search,
      });
    } else if (currentIndex === questions.length - 1) {
      const targetPage = page < totalPages ? page + 1 : 1;
      pendingRef.current = { targetPage, position: 'first' };
      changePage(targetPage);
    }
  };

  return (
    <div className={classes.linksWrapper}>
      <button onClick={handlePrevClick} className={`${classes.linkPrev} ${classes.link}`}>
        Предыдущий
      </button>
      <button onClick={handleNextClick} className={`${classes.linkNext} ${classes.link}`}>
        Следующий
      </button>
    </div>
  );
}
