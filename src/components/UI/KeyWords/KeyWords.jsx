import MyTitle from '../MyTitle/MyTitle';
import KeyWord from '../KeyWord/KeyWord';
import classes from './KeyWords.module.css';

export default function KeyWords({ keywords }) {
  return (
    <div>
      <MyTitle title="Ключевые слова:" />
      <div className={classes.keyWordsWrapper}>
        {keywords.map((keyword, index) => (
          <KeyWord key={index} title={keyword} />
        ))}
      </div>
    </div>
  );
}
