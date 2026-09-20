import MyTitle from '../MyTitle/MyTitle';
import KeyWord from '../KeyWord/KeyWord';
import classes from './KeyWords.module.css';

export default function KeyWords() {
  return (
    <div>
      <MyTitle title="Ключевые слова:" />
      <div className={classes.keyWordsWrapper}>
        <KeyWord title={'Virtual DOM'} />
        <KeyWord title={'Виртуальное DOM'} />
        <KeyWord title={'React'} />
      </div>
    </div>
  );
}
