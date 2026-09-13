import classes from '../aside/Aside.module.css';
import Complexity from '../UI/Complexity/Complexity';
import MyTitle from '../UI/MyTitle/MyTitle';

export default function ComplexityBlock({ title, data, changeComplexity }) {
  return (
    <div>
      <MyTitle title={title} />
      <div className={classes.variants}>
        {data.map((item) => (
          <Complexity change={changeComplexity} key={item.id} title={item.title} id={item.value} />
        ))}
      </div>
    </div>
  );
}
