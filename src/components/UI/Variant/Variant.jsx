import classes from './Variant.module.css';

export default function Variant({ title, onClick, isActive }) {
  return (
    <div>
      <button onClick={onClick} className={isActive ? classes.activeButton : classes.button}>
        {title}
      </button>
    </div>
  );
}
