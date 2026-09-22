import { useState } from 'react';
import QuestionService from '../../API/QuestionService';
import { useFetching } from '../../hooks/useFetching';
import classes from '../aside/Aside.module.css';
import ButtonLookAll from '../UI/ButtonLookAll/ButtonLookAll';
import MyTitle from '../UI/MyTitle/MyTitle';
import Variant from '../UI/Specialization/Specialization';
import { useSearchParams } from 'react-router-dom';

export default function SpecializationBlock({ title, data, setSpecializations, totalSpec }) {
  const [isLookAll, setIsLookAll] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedId = Number(searchParams.get('specialization'));

  const [fetchSpecializations] = useFetching(async () => {
    const response = await QuestionService.getAllSpecializations(isLookAll ? undefined : totalSpec);
    setSpecializations((prev) => ({
      ...prev,
      specializations: response.data.data,
    }));
  });

  const lookAllClick = () => {
    fetchSpecializations();
    setIsLookAll((prev) => !prev);
  };

  const handleClick = (id) => {
    const next = new URLSearchParams(searchParams);
    if (id === selectedId) {
      next.delete('specialization');
    } else {
      next.set('specialization', String(id));
    }
    next.set('page', String(1));
    setSearchParams(next);
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
