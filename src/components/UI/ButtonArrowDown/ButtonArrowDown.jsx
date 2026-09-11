import classes from './ButtonArrowDown.module.css';
export default function ButtonArrowDown({ handleClick }) {
  return <button onClick={handleClick} className={classes.buttonArrow}></button>;
}
