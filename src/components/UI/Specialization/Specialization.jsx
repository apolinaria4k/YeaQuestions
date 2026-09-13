import classes from './Specialization.module.css';

export default function Specialization({ title, onClick, isActive }) {
  return (
    <div>
      <button onClick={onClick} className={isActive ? classes.activeButton : classes.button}>
        {title}
      </button>
    </div>
  );
}
