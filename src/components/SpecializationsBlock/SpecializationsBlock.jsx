import { useState } from 'react';
import QuestionService from '../../API/QuestionService';
import { useFetching } from '../../hooks/useFetching';
import classes from '../aside/Aside.module.css';
import ButtonLookAll from '../UI/ButtonLookAll/ButtonLookAll';
import MyTitle from '../UI/MyTitle/MyTitle';
import Variant from '../UI/Variant/Variant';

export default function SpecializationBlock({
  title,
  data,
  setSpecializations,
  totalSpec,
  changeSpecialization,
}) {
  const [isLookAll, setIsLookAll] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [fetchSpecializations] = useFetching(async () => {
    const response = await QuestionService.getAllSpecializations(isLookAll ? undefined : totalSpec);
    setSpecializations(response.data.data);
  });

  const lookAllClick = () => {
    fetchSpecializations();
    setIsLookAll((prev) => !prev);
  };

  const handleClick = (id) => {
    changeSpecialization(id);
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div>
        <MyTitle title={title} />
        <div className={classes.variants}>
          {data.map((item) => (
            <Variant
              onClick={() => handleClick(item.id)}
              isActive={selectedId === item.id}
              key={item.id}
              title={item.title}
            />
          ))}
        </div>
        <ButtonLookAll onClick={() => lookAllClick()} isLookAll={isLookAll} />
      </div>
    </>
  );
}
