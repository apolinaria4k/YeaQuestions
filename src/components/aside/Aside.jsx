import ComplexitiesBlock from '../ComplexitiesBlock/ComplexitiesBlock';
import RatesBlock from '../RatesBlock/RatesBlock';
import SkillsBlock from '../SkillsBlock/SkillsBlock';
import SpecializationBlock from '../SpecializationsBlock/SpecializationsBlock';
import StatusesBlock from '../StatusesBlock/StatusesBlock';
import MyInput from '../UI/MyInput/MyInput';
import classes from './Aside.module.css';

export default function Aside({
  filter,
  setValue,
  changeSpecialization,
  changeSkill,
  changeComplexity,
  changeRate,
  specializations,
  setSpecializations,
  skills,
  setSkills,
  totals,
}) {
  const complexities = [
    { id: 1, title: '1-3', value: [1, 2, 3] },
    { id: 2, title: '4-6', value: [4, 5, 6] },
    { id: 3, title: '7-8', value: [7, 8] },
    { id: 4, title: '9-10', value: [9, 10] },
  ];
  const rates = [1, 2, 3, 4, 5];
  const statuses = ['Изученные', 'Неизученные', 'Все'];

  return (
    <aside className={classes.aside}>
      <MyInput filter={filter} setValue={setValue}></MyInput>

      <SpecializationBlock
        title="Специализация"
        data={specializations}
        setSpecializations={setSpecializations}
        totalSpec={totals.totalSpec}
        changeSpecialization={changeSpecialization}
      />
      <SkillsBlock
        title="Навыки"
        data={skills}
        setSkills={setSkills}
        totalSkills={totals.totalSkills}
        changeSkill={changeSkill}
      />

      <ComplexitiesBlock
        title="Сложность"
        data={complexities}
        changeComplexity={changeComplexity}
      />

      <RatesBlock title="Рейтинг" data={rates} changeRate={changeRate} />
      <StatusesBlock title="Статус" data={statuses}></StatusesBlock>
    </aside>
  );
}
