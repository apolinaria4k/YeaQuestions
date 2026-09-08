import classes from './Section.module.css';
import QuestionItem from '../questionItem/QuestionItem';

export default function Section() {
  return (
    <section className={classes.section}>
      <h2 className={classes.title}>Вопросы React, JavaScript</h2>
      <ul>
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
        <QuestionItem />
      </ul>
    </section>
  );
}
