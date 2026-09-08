import classes from './Header.module.css';

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.wrapperHeader}>
        <nav className={classes.nav}>
          <a href="#">
            <img src="/logo.svg" alt="Logo" />
          </a>
          <ul className={classes.navList}>
            <li>База вопросов</li>
            <li>Тренажер</li>
            <li>Материалы</li>
            <li>Навыки(hh)</li>
          </ul>
        </nav>
        <div className={classes.buttons}>
          <button className={classes.enterButton}>Вход</button>
          <button className={classes.signUpButton}>Регистрация</button>
        </div>
      </div>
    </header>
  );
}
