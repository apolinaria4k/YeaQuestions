import classes from './DetailedQuestionTitle.module.css';

export default function DetailedQuestionTitle({ title, description }) {
  return (
    <div className={classes.questionWrapper}>
      <div>
        <img src="/icon.png" alt="" />
      </div>
      <div className={classes.textWrapper}>
        <p className={classes.title}>{title}</p>
        <p className={classes.text}>{description}</p>
      </div>
    </div>
  );
}
