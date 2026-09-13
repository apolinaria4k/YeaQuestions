import { useState } from 'react';
import QuestionService from '../../API/QuestionService';
import { useFetching } from '../../hooks/useFetching';
import classes from '../aside/Aside.module.css';
import ButtonLookAll from '../UI/ButtonLookAll/ButtonLookAll';
import MyTitle from '../UI/MyTitle/MyTitle';
import SkillAndRate from '../UI/SkillAndRate/SkillAndRate';

export default function SkillsBlock({ title, data, totalSkills, setSkills, changeSkill }) {
  const [isLookAll, setIsLookAll] = useState(false);

  const [fetchSkills] = useFetching(async () => {
    const response = await QuestionService.getAllSkills(isLookAll ? undefined : totalSkills);
    setSkills((prev) => ({
      ...prev,
      skills: response.data.data,
    }));
  });

  const lookAllClick = () => {
    fetchSkills();
    setIsLookAll((prev) => !prev);
  };

  return (
    <div>
      <MyTitle title={title} />
      <div className={classes.variants}>
        {data.map((item) => (
          <SkillAndRate change={changeSkill} key={item.id} title={item.title} id={item.id} />
        ))}
      </div>
      <ButtonLookAll onClick={() => lookAllClick()} isLookAll={isLookAll} />
    </div>
  );
}
