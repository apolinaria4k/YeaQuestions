import { useContext, useEffect, useState } from 'react';
import classes from './Variant.module.css';
import { Context } from '../../../context';

export default function Variant({ title }) {
  const { questions, setFilteredQuestions } = useContext(Context);
  const [isActive, setIsActive] = useState(false);
  const [specialization, setSpecialization] = useState('');
  const handleClick = (e) => {
    setIsActive((prev) => !prev);
    setSpecialization(e.target.innerText);
  };

  // useEffect(() => {
  //   const fQuestions = questions.filter((question) =>
  //     question.questionSpecializations.filter((item) =>
  //       item.title.toLowerCase().includes(specialization.toLowerCase()),
  //     ),
  //   );

  //   console.log(fQuestions);
  //   setFilteredQuestions(fQuestions);
  // }, [specialization]);

  return (
    <div>
      <button
        onClick={handleClick}
        className={`${classes.button} ${isActive && classes.activeButton}`}>
        {title}
      </button>
    </div>
  );
}
