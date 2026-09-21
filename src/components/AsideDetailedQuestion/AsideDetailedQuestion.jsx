import GuruProfile from '../GuruProfile/GuruProfile';
import ButtonClose from '../UI/ButtonClose/ButtonClose';
import KeyWords from '../UI/KeyWords/KeyWords';
import Levels from '../UI/Levels/Levels';
import Skills from '../UI/Skills/Skills';
import classes from './AsideDetailedQuestion.module.css';

export default function AsideDetailedQuestion({ complexity, rate, questionSkills, keywords }) {
  return (
    <aside className={classes.aside}>
      <div className={classes.blockWrapper}>
        <div className={classes.blockInner}>
          <ButtonClose />

          <Levels complexity={complexity} rate={rate} />
          <Skills questionSkills={questionSkills} />
          <KeyWords keywords={keywords} />

          <div>
            <p className={classes.author}>
              Автор: <span className={classes.authorColor}>Дмитрий Мусиенко</span>
            </p>
          </div>
        </div>
      </div>

      <div className={`${classes.blockWrapper} ${classes.border}`}>
        <GuruProfile />
      </div>
    </aside>
  );
}
