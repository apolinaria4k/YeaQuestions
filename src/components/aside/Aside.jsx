import MyInput from '../UI/MyInput/MyInput';
import VariantsBlock from '../VariantsBlock/VariantsBlock';
import classes from './Aside.module.css';
import { setVariants } from '../utils/setVariants';
import { useContext } from 'react';
import { Context } from '../../context';

export default function Aside() {
  const { skills, specializations } = useContext(Context);

  const variants = setVariants(skills, specializations);

  return (
    <aside className={classes.aside}>
      <MyInput></MyInput>
      {variants.map((item) => (
        <VariantsBlock key={item.id} {...item} />
      ))}
    </aside>
  );
}
