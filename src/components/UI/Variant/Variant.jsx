import { useCallback, useEffect, useState } from 'react';
import classes from './Variant.module.css';

export default function Variant({ title }) {
  const [isActive, setIsActive] = useState(false);
  const [specialization, setSpecialization] = useState('');

  const handleClick = (e) => {
    setIsActive((prev) => !prev);
    setSpecialization(e.target.innerText);
  };

  // const filterQuestions = useCallback(() => {
  //   const fQuestions = questions.filter((question) =>
  //     question.questionSpecializations.some((item) =>
  //       item.title.toLowerCase().includes(specialization.toLowerCase()),
  //     ),
  //   );
  //   setFilteredQuestions(fQuestions);
  // }, [isActive, specialization]);

  // useEffect(() => {
  //   filterQuestions();
  //   console.log(isActive);
  // }, [isActive, specialization]);

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
