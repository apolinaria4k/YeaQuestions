import classes from './NotFound.module.css';

export default function NotFound() {
  return (
    <main className={classes.main}>
      <div className={classes.wrapperMain}>
        <div className={classes.textWrapper}>
          <p>Такая страница не найдена</p>
        </div>
      </div>
    </main>
  );
}
