import MyInput from '../UI/MyInput/MyInput';
import { setVariants } from '../utils/setVariants';
import VariantsBlock from '../VariantsBlock/VariantsBlock';
import classes from './Aside.module.css';

export default function Aside({
  value,
  setValue,
  specializations,
  setSpecializations,
  skills,
  setSkills,
  totalSkills,
  totalSpec,
}) {
  const variants = setVariants(skills, specializations);

  return (
    <aside className={classes.aside}>
      <MyInput value={value} setValue={setValue}></MyInput>
      {variants.map((item) => (
        <VariantsBlock
          setSpecializations={setSpecializations}
          specializations={specializations}
          skills={skills}
          setSkills={setSkills}
          totalSkills={totalSkills}
          totalSpec={totalSpec}
          key={item.id}
          {...item}
        />
      ))}
    </aside>
  );
}
