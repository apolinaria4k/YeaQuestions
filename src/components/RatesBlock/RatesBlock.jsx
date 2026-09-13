import classes from '../aside/Aside.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';
import SkillAndRate from '../UI/SkillAndRate/SkillAndRate';

export default function RateBlock({ title, data, changeRate }) {
  return (
    <div>
      <MyTitle title={title} />
      <div className={classes.variants}>
        {data.map((item) => (
          <SkillAndRate change={changeRate} id={item} key={item} title={item} />
        ))}
      </div>
    </div>
  );
}
