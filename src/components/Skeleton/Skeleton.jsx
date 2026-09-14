import classes from './Skeleton.module.css';

export default function Skeleton({ count = 10 }) {
  return (
    <>
      <ul className={classes.questionList}>
        {[...Array(count)].map((_, index) => (
          <li className={classes.item} key={index}></li>
        ))}
      </ul>
    </>
  );
}
