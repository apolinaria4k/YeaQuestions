import { useState } from 'react';
import ButtonArrowDown from '../ButtonArrowDown/ButtonArrowDown';
import AnswerInItem from '../AnswerInItem/AnswerInItem';
import classes from './QuestionItem.module.css';

export default function QuestionItem() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <li className={classes.item}>
      <div className={classes.wrapper}>
        <p className={classes.text}>Что такое Virtual DOM, и как он работает?</p>
        <ButtonArrowDown handleClick={handleClick}></ButtonArrowDown>
      </div>
      {isVisible && <AnswerInItem />}
    </li>
  );
}
