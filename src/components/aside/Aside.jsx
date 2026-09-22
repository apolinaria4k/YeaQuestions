import ComplexitiesBlock from '../ComplexitiesBlock/ComplexitiesBlock';
import RatesBlock from '../RatesBlock/RatesBlock';
import SkillsBlock from '../SkillsBlock/SkillsBlock';
import SpecializationBlock from '../SpecializationsBlock/SpecializationsBlock';
import MyInput from '../UI/MyInput/MyInput';
import classes from './Aside.module.css';
import ButtonClose from '../UI/ButtonClose/ButtonClose';

export default function Aside({
  isVisible,
  setIsVisible,
  skillsAndSpec,
  setSkillsAndSpec,
  totals,
}) {
  const complexities = [
    { id: 1, title: '1-3', value: [1, 2, 3] },
    { id: 2, title: '4-6', value: [4, 5, 6] },
    { id: 3, title: '7-8', value: [7, 8] },
    { id: 4, title: '9-10', value: [9, 10] },
  ];
  const rates = [1, 2, 3, 4, 5];
  // const statuses = ['Все', 'Изученные', 'Неизученные'];

  return (
    <aside className={`${classes.aside} ${isVisible ? classes.visible : ''}`}>
      <ButtonClose setIsVisible={setIsVisible}></ButtonClose>

      <div className={classes.innerWrapper}>
        <MyInput></MyInput>

        <SpecializationBlock
          title="Специализация"
          data={skillsAndSpec.specializations}
          setSpecializations={setSkillsAndSpec}
          totalSpec={totals.totalSpec}
        />
        <SkillsBlock
          title="Навыки"
          data={skillsAndSpec.skills}
          setSkills={setSkillsAndSpec}
          totalSkills={totals.totalSkills}
        />

        <ComplexitiesBlock title="Сложность" data={complexities} />

        <RatesBlock title="Рейтинг" data={rates} />
        {/* <StatusesBlock title="Статус" data={statuses}></StatusesBlock> */}
      </div>
    </aside>
  );
}
