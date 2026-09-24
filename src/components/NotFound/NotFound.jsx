import { Link, useLocation } from 'react-router-dom';
import classes from './NotFound.module.css';

export default function NotFound() {
  const location = useLocation();
  return (
    <main className={classes.main}>
      <div className={classes.wrapperMain}>
        <div className={classes.textWrapper}>
          <p>Такая страница не найдена</p>
        </div>
        <Link to={{ pathname: `/`, search: location.search }} className={classes.link}>
          К списку вопросов
        </Link>
      </div>
    </main>
  );
}
