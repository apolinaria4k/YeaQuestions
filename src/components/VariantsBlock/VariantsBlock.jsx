import MyTitle from '../UI/MyTitle/MyTitle';
import classes from '../aside/Aside.module.css';
import Variant from '../UI/Variant/Variant';
import ButtonLookAll from '../UI/ButtonLookAll/ButtonLookAll';

export default function VariantsBlock({ title, data, hasButton }) {
  return (
    <div>
      <MyTitle title={title} />
      <div className={classes.variants}>
        {data.map((item) => (
          <Variant key={item.id} title={item.title} />
        ))}
      </div>
      {hasButton && <ButtonLookAll title={title} />}
    </div>
  );
}
