import classes from './ButtonLookAll.module.css';

export default function ButtonLookAll({ isLookAll, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={classes.button}>
        {isLookAll ? 'Скрыть' : 'Посмотреть все'}
      </button>
    </div>
  );
}
