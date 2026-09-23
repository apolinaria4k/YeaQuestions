import { useNavigate, useParams } from 'react-router-dom';
import useQuestions from '../../hooks/useQuestions';
import classes from './NextPreviousButtons.module.css';

export default function NextPreviousButtons() {
  const { questions } = useQuestions();
  const { questionId } = useParams();

  const navigate = useNavigate();

  const handlePrevClick = () => {
    const prevQuestionIndex =
      questions.findIndex((question) => question.id === Number(questionId)) - 1;
    const prevtQuestionId = questions[prevQuestionIndex].id;
    navigate(`/questions/${prevtQuestionId}`);
  };

  const handleNextClick = () => {
    const nextQuestionIndex =
      questions.findIndex((question) => question.id === Number(questionId)) + 1;
    const nextQuestionId = questions[nextQuestionIndex].id;
    navigate(`/questions/${nextQuestionId}`);
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
