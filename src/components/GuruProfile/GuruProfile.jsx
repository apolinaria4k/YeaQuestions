import SocialsGuru from '../UI/SocialsGuru/SocialsGuru';
import classes from './GuruProfile.module.css';

export default function GuruProfile() {
  return (
    <div className={classes.guruWrapper}>
      <div className={classes.guruProfile}>
        <div>
          <img src="/profilePhoto.png" alt="" />
        </div>
        <div className={classes.text}>
          <p className={classes.name}>Руслан Куянец</p>
          <p className={classes.afterName}>Python Guru</p>
        </div>
      </div>
      <div>
        <p>Guru – это эксперты YeaHub, которые помогают развивать комьюнити.</p>
      </div>
      <SocialsGuru></SocialsGuru>
    </div>
  );
}
