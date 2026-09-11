import { useState } from 'react';
import ButtonArrowDown from '../UI/ButtonArrowDown/ButtonArrowDown';
import AnswerInItem from '../AnswerInItem/AnswerInItem';
import classes from './QuestionItem.module.css';

export default function QuestionItem({ title, complexity, shortAnswer, rate }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <li className={classes.item}>
      <div className={classes.wrapper}>
        <p className={classes.text}>{title}</p>
        <ButtonArrowDown handleClick={handleClick}></ButtonArrowDown>
      </div>
      {isVisible && <AnswerInItem rate={rate} complexity={complexity} shortAnswer={shortAnswer} />}
    </li>
  );
}
