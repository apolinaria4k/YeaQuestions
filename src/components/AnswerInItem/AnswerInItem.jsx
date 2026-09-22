import parse from 'html-react-parser';
import Characteristic from '../UI/characteristic/Characteristic';
import { sanitizeHtml } from '../utils/sanitizeHtml';
import classes from './AnswerInItem.module.css';
import { Link } from 'react-router-dom';

export default function AnswerInItem({ id, rate, complexity, shortAnswer }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperCharacter}>
        <Characteristic title="Рейтинг" value={rate}></Characteristic>
        <Characteristic title="Сложность" value={complexity}></Characteristic>
      </div>
      <div className={classes.textOfAnswer}>{parse(sanitizeHtml(shortAnswer))}</div>
      <div className={classes.linkWrapper}>
        <Link to={`/questions/${id}`} className={classes.link}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}
