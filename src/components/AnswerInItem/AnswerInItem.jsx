import parse from 'html-react-parser';
import Characteristic from '../UI/characteristic/Characteristic';
import classes from './AnswerInItem.module.css';
import { sanitizeHtml } from '../utils/sanitizeHtml';

export default function AnswerInItem({ rate, complexity, shortAnswer }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperCharacter}>
        <Characteristic title="Рейтинг" value={rate}></Characteristic>
        <Characteristic title="Сложность" value={complexity}></Characteristic>
      </div>
      <div className={classes.textOfAnswer}>{parse(sanitizeHtml(shortAnswer))}</div>
    </div>
  );
}
