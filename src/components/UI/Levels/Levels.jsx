import MyTitle from '../MyTitle/MyTitle';
import Characteristic from '../characteristic/Characteristic';
import classes from './Levels.module.css';

export default function Levels({ complexity, rate }) {
  return (
    <div>
      <MyTitle title="Уровень:" />
      <div className={classes.wrapperCharacter}>
        <Characteristic title="Сложность" value={complexity}></Characteristic>
        <Characteristic title="Рейтинг" value={rate}></Characteristic>
      </div>
    </div>
  );
}
