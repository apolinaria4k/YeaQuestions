import classes from './ShortAnswer.module.css';
export default function ShortAnswer({ text }) {
  return (
    <>
      <p className={classes.preTitle}>Краткий ответ</p>
      <div className={classes.text}>{text}</div>
    </>
  );
}
