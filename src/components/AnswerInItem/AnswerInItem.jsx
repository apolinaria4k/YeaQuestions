import parse from 'html-react-parser';
import { Link, useLocation } from 'react-router-dom';
import Characteristic from '../UI/characteristic/Characteristic';
import { sanitizeHtml } from '../utils/sanitizeHtml';
import classes from './AnswerInItem.module.css';

export default function AnswerInItem({ id, rate, complexity, shortAnswer }) {
  const location = useLocation();
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperCharacter}>
        <Characteristic title="Рейтинг" value={rate}></Characteristic>
        <Characteristic title="Сложность" value={complexity}></Characteristic>
      </div>
      <div className={classes.textOfAnswer}>{parse(sanitizeHtml(shortAnswer))}</div>
      <div className={classes.linkWrapper}>
        <Link
          to={{ pathname: `/questions/${id}`, search: location.search }}
          className={classes.link}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}
