import classes from './MyTitle.module.css';

export default function MyTitle({ title }) {
  return <p className={classes.title}>{title}</p>;
}
