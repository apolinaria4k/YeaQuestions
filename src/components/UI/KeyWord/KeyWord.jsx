import classes from './KeyWord.module.css';
import { Link } from 'react-router-dom';

export default function KeyWord({ title }) {
  return (
    <Link to={`/${title}`} className={classes.text}>
      #{title}
    </Link>
  );
}
