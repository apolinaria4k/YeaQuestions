import MyInput from '../UI/MyInput/MyInput';
import { setVariants } from '../utils/setVariants';
import VariantsBlock from '../VariantsBlock/VariantsBlock';
import classes from './Aside.module.css';

export default function Aside({
  filter,
  setValue,
  changeSpecialization,
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
      <MyInput filter={filter} setValue={setValue}></MyInput>
      {variants.map((item) => (
        <VariantsBlock
          changeSpecialization={changeSpecialization}
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
