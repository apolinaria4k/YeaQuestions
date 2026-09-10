import { useContext, useState } from 'react';
import QuestionService from '../../../API/QuestionService';
import { Context } from '../../../context';
import { skillsLimit, specializationsLimit } from '../../utils/totals';
import classes from './ButtonLookAll.module.css';

export default function ButtonLookAll({ title }) {
  const { setSpecializations, setSkills } = useContext(Context);
  const [isLookAll, setIsLookAll] = useState(false);

  const handleClick = () => {
    if (title === 'Специализация') {
      const newData = async () => {
        const response = await QuestionService.getAllSpecializations(
          isLookAll ? undefined : specializationsLimit,
        );
        setSpecializations(response.data.data);
      };
      newData();
    }
    if (title === 'Навыки') {
      const newData = async () => {
        const response = await QuestionService.getAllSkills(isLookAll ? undefined : skillsLimit);
        setSkills(response.data.data);
      };
      newData();
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
