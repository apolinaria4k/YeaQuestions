import MyTitle from '../MyTitle/MyTitle';
import SkillAndRate from '../SkillAndRate/SkillAndRate';
import classes from './Skills.module.css';

export default function Levels() {
  return (
    <div>
      <MyTitle title="Навыки:" />
      <div className={classes.variants}>
        <SkillAndRate title={'React'} />
        <SkillAndRate title={'JavaScript'} />
        <SkillAndRate title={'Dom'} />
      </div>
    </div>
  );
}
