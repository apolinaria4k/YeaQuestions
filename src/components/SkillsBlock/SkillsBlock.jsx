import { useState } from 'react';
import QuestionService from '../../API/QuestionService';
import { useFetching } from '../../hooks/useFetching';
import classes from '../aside/Aside.module.css';
import ButtonLookAll from '../UI/ButtonLookAll/ButtonLookAll';
import MyTitle from '../UI/MyTitle/MyTitle';
import Variant from '../UI/Variant/Variant';

export default function SkillsBlock({ title, data, totalSkills, setSkills, changeSkill }) {
  const [isLookAll, setIsLookAll] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [fetchSkills] = useFetching(async () => {
    const response = await QuestionService.getAllSkills(isLookAll ? undefined : totalSkills);
    setSkills(response.data.data);
  });

  const handleClick = (id) => {
    changeSkill(id);
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const lookAllClick = () => {
    fetchSkills();
    setIsLookAll((prev) => !prev);
  };
  return (
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
  );
}
