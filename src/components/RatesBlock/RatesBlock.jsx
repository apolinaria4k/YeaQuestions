import classes from '../aside/Aside.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';
import Rate from '../UI/Rate/Rate';

export default function RateBlock({ title, data }) {
  return (
    <div>
      <MyTitle title={title} />
      <div className={classes.variants}>
        {data.map((item) => (
          <Rate key={item} title={item} />
        ))}
      </div>
    </div>
  );
}
