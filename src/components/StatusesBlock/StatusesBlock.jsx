import classes from '../aside/Aside.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';
import Status from '../UI/Status/Status';

export default function StatusesBlock({ title, data }) {
  return (
    <div>
      <MyTitle title={title} />
      <div className={classes.variants}>
        {data.map((item, index) => (
          <Status key={item} id={index} title={item} />
        ))}
      </div>
    </div>
  );
}
