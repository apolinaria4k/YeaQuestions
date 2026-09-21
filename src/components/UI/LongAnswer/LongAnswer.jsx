import classes from './LongAnswer.module.css';
export default function LongAnswer({ text }) {
  return (
    <div className={classes.buttonWrapper}>
      <input type="checkbox" id="showMoreChecker" className={classes.checker} />
      <div className={classes.wrapper}>
        <p className={classes.preTitle}>Развернутый ответ</p>
        <div className={classes.text}>{text}</div>
        <div className={classes.bottom}></div>
      </div>

      <label htmlFor="showMoreChecker" className={classes.button}></label>
    </div>
  );
}
