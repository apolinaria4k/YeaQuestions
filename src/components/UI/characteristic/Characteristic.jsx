import classes from './Characteristic.module.css';
export default function Characteristic({ title, value }) {
  return (
    <div className={classes.wrapper}>
      <p>
        {title}: <span className={classes.value}>{value}</span>
      </p>
    </div>
  );
}
