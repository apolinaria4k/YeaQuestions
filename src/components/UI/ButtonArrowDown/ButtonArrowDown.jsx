import classes from './ButtonArrowDown.module.css';
export default function ButtonArrowDown({ isVisible, handleClick }) {
  return (
    <button
      aria-label={isVisible ? 'Скрыть ответ' : 'Раскрыть ответ'}
      onClick={handleClick}
      className={classes.buttonArrow}></button>
  );
}
