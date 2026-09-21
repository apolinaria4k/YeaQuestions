import MyTitle from '../MyTitle/MyTitle';
import SkillDetailedQuestion from '../SkillDetailedQuestion/SkillDetailedQuestion';
import classes from './Skills.module.css';

export default function Levels({ questionSkills }) {
  return (
    <div>
      <MyTitle title="Навыки:" />
      <div className={classes.variants}>
        {questionSkills.map((skill) => (
          <SkillDetailedQuestion key={skill.id} title={skill.title} id={skill.id} />
        ))}
      </div>
    </div>
  );
}
