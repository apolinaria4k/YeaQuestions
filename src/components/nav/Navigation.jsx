import classes from './Navigation.module.css';

export default function Navigation() {
  return (
    <ul className={classes.navList}>
      <li>База вопросов</li>
      <li>Тренажер</li>
      <li>Материалы</li>
      <li>Навыки(hh)</li>
    </ul>
  );
}
