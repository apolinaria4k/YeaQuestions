import classes from './NextPreviousButtons.module.css';
import { Link } from 'react-router-dom';

export default function NextPreviousButtons() {
  return (
    <div className={classes.linksWrapper}>
      <Link className={`${classes.linkPrev} ${classes.link}`}>Предыдущий</Link>
      <Link className={`${classes.linkNext} ${classes.link}`}>Следующий</Link>
    </div>
  );
}
