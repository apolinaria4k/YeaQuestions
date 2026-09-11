import MyTitle from '../UI/MyTitle/MyTitle';
import classes from '../aside/Aside.module.css';
import Variant from '../UI/Variant/Variant';
import ButtonLookAll from '../UI/ButtonLookAll/ButtonLookAll';

export default function VariantsBlock({
  changeSpecialization,
  setSpecializations,
  setSkills,
  title,
  data,
  hasButton,
  totalSkills,
  totalSpec,
  specializations,
  skills,
}) {
  return (
    <div>
      <MyTitle title={title} />
      <div className={classes.variants}>
        {data.map((item) => (
          <Variant changeSpecialization={changeSpecialization} key={item.id} {...item} />
        ))}
      </div>
      {hasButton && (
        <ButtonLookAll
          setSpecializations={setSpecializations}
          specializations={specializations}
          skills={skills}
          setSkills={setSkills}
          totalSkills={totalSkills}
          totalSpec={totalSpec}
          title={title}
        />
      )}
    </div>
  );
}
