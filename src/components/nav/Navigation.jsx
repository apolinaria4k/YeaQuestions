import classes from './Navigation.module.css';

export default function Navigation({ isVisible }) {
  return (
    <ul className={`${classes.navList} ${isVisible ? classes.visible : ''}`}>
      <li>База вопросов</li>
      <li>Тренажер</li>
      <li>Материалы</li>
      <li>Навыки(hh)</li>
    </ul>
  );
}
