import MyTitle from '../MyTitle/MyTitle';
import Characteristic from '../characteristic/Characteristic';
import classes from './Levels.module.css';

export default function Levels() {
  return (
    <div>
      <MyTitle title="Уровень:" />
      <div className={classes.wrapperCharacter}>
        <Characteristic title="Сложность" value={10}></Characteristic>
        <Characteristic title="Рейтинг" value={10}></Characteristic>
      </div>
    </div>
  );
}
