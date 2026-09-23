import { createSearchParams, useLocation, useNavigate, useParams } from 'react-router-dom';
import useQuestions from '../../hooks/useQuestions';
import classes from './NextPreviousButtons.module.css';
import { useSearchParams } from 'react-router-dom';

export default function NextPreviousButtons() {
  const location = useLocation();
  const { questions } = useQuestions();
  const { questionId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;
  const totalPages = Number(searchParams.get('totalPages')) || 0;
  const navigate = useNavigate();

  const handlePrevClick = () => {
    // if (questionId <= questions.length - 1) {
    //   if (page <= totalPages) {
    //     const next = new URLSearchParams(searchParams);
    //     next.set('page', String(page + 1));
    //     setSearchParams(next);

    //     const prevQuestionIndex =
    //       questions.findIndex((question) => question.id === Number(questionId)) - 1;
    //     const prevQuestionId = questions[prevQuestionIndex].id;
    //     navigate(`/questions/${prevQuestionId}`);
    //   }
    // }
    const prevQuestionIndex =
      questions.findIndex((question) => question.id === Number(questionId)) - 1;
    const prevQuestionId = questions[prevQuestionIndex].id;
    navigate(`/questions/${prevQuestionId}`);
  };

  const handleNextClick = () => {
    const findIndex = questions.findIndex((question) => question.id === Number(questionId));
    const nextQuestionIndex = findIndex === -1 ? 0 : findIndex + 1;
    if (nextQuestionIndex <= questions.length - 1) {
      console.log('click');
      console.log(totalPages);
      console.log(page);

      const nextQuestionId = questions[nextQuestionIndex].id;
      navigate({
        pathname: `/questions/${nextQuestionId}`,
        search: '?' + createSearchParams(location.search),
      });
    } else if (page <= totalPages) {
      console.log('page < totalPages');
      const next = new URLSearchParams(searchParams);
      next.set('page', String(page + 1));
      setSearchParams(next);

      // const nextQuestionId = questions[nextQuestionIndex].id;
      // navigate({
      //   pathname: `/questions/${nextQuestionId}`,
      //   search: '?' + createSearchParams(location.search),
      // });
    }
    // const nextQuestionIndex =
    //   questions.findIndex((question) => question.id === Number(questionId)) + 1;
    // const nextQuestionId = questions[nextQuestionIndex].id;
    // navigate({
    //   pathname: `/questions/${nextQuestionId}`,
    //   search: '?' + createSearchParams(location.search),
    // });
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
