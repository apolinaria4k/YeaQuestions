import classes from './KeyWord.module.css';

export default function KeyWord({ title }) {
  return <p className={classes.text}>#{title}</p>;
}
