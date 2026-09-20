import classes from './MainDetails.module.css';
import SectionDetailedQuestion from '../SectionDetailedQuestion/SectionDetailedQuestion';
import AsideDetailedQuestion from '../AsideDetailedQuestion/AsideDetailedQuestion';
import { Link } from 'react-router-dom';

export default function MainDetails() {
  return (
    <main className={classes.main}>
      <div className={classes.linkWrapper}>
        <Link to="/" className={classes.link}>
          Назад
        </Link>
      </div>
      <div className={classes.wrapperMain}>
        <SectionDetailedQuestion />
        <AsideDetailedQuestion />
      </div>
    </main>
  );
}
