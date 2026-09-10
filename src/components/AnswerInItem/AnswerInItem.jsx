import parse from 'html-react-parser';
import Characteristic from '../characteristic/Characteristic';
import classes from './AnswerInItem.module.css';

export default function AnswerInItem({ rate, complexity, shortAnswer }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperCharacter}>
        <Characteristic title="Рейтинг" value={rate}></Characteristic>
        <Characteristic title="Сложность" value={complexity}></Characteristic>
      </div>
      <div className={classes.textOfAnswer}>{parse(shortAnswer)}</div>
    </div>
  );
}
