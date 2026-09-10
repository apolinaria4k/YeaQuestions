import { useState } from 'react';
import QuestionService from '../../../API/QuestionService';
import { useFetching } from '../../../hooks/useFetching';
import classes from './ButtonLookAll.module.css';

export default function ButtonLookAll({
  title,
  totalSkills,
  totalSpec,
  setSpecializations,
  setSkills,
}) {
  const [isLookAll, setIsLookAll] = useState(false);

  const [fetchSpecializations] = useFetching(async () => {
    const response = await QuestionService.getAllSpecializations(isLookAll ? undefined : totalSpec);
    setSpecializations(response.data.data);
  });

  const [fetchSkills] = useFetching(async () => {
    const response = await QuestionService.getAllSkills(isLookAll ? undefined : totalSkills);
    setSkills(response.data.data);
  });

  const handleClick = () => {
    if (title === 'Специализация') {
      fetchSpecializations();
    }
    if (title === 'Навыки') {
      fetchSkills();
    }

    setIsLookAll((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleClick} className={classes.button}>
        {isLookAll ? 'Скрыть' : 'Посмотреть все'}
      </button>
    </div>
  );
}
