import ComplexitiesBlock from '../ComplexitiesBlock/ComplexitiesBlock';
import RatesBlock from '../RatesBlock/RatesBlock';
import SkillsBlock from '../SkillsBlock/SkillsBlock';
import SpecializationBlock from '../SpecializationsBlock/SpecializationsBlock';
import MyInput from '../UI/MyInput/MyInput';
import classes from './Aside.module.css';

export default function Aside({
  isVisible,
  setIsVisible,
  filter,
  changeValue,
  changeSpecialization,
  changeSkill,
  changeComplexity,
  changeRate,
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
      <div className={classes.wrapper}>
        <button
          aria-label="Закрыть фильтры"
          className={classes.asideCloseButton}
          onClick={() => setIsVisible(false)}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.35891 7.47601C8.11483 7.23194 7.7191 7.23194 7.47502 7.47601C7.23095 7.72009 7.23095 8.11582 7.47502 8.3599L9.11643 10.0013L7.47504 11.6427C7.23096 11.8868 7.23096 12.2825 7.47504 12.5266C7.71912 12.7706 8.11485 12.7706 8.35893 12.5266L10.0003 10.8852L11.6417 12.5265C11.8858 12.7706 12.2815 12.7706 12.5256 12.5265C12.7696 12.2825 12.7696 11.8867 12.5256 11.6427L10.8842 10.0013L12.5256 8.35991C12.7697 8.11584 12.7697 7.72011 12.5256 7.47603C12.2815 7.23195 11.8858 7.23195 11.6417 7.47603L10.0003 9.11741L8.35891 7.47601Z"
              fill="#F3164E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0003 1.04297C5.05277 1.04297 1.04199 5.05375 1.04199 10.0013C1.04199 14.9489 5.05277 18.9596 10.0003 18.9596C14.9479 18.9596 18.9587 14.9489 18.9587 10.0013C18.9587 5.05375 14.9479 1.04297 10.0003 1.04297ZM2.29199 10.0013C2.29199 5.74411 5.74313 2.29297 10.0003 2.29297C14.2575 2.29297 17.7087 5.74411 17.7087 10.0013C17.7087 14.2585 14.2575 17.7096 10.0003 17.7096C5.74313 17.7096 2.29199 14.2585 2.29199 10.0013Z"
              fill="#F3164E"
            />
            <path
              d="M8.35891 7.47601C8.11483 7.23194 7.7191 7.23194 7.47502 7.47601C7.23095 7.72009 7.23095 8.11582 7.47502 8.3599L9.11643 10.0013L7.47504 11.6427C7.23096 11.8868 7.23096 12.2825 7.47504 12.5266C7.71912 12.7706 8.11485 12.7706 8.35893 12.5266L10.0003 10.8852L11.6417 12.5265C11.8858 12.7706 12.2815 12.7706 12.5256 12.5265C12.7696 12.2825 12.7696 11.8867 12.5256 11.6427L10.8842 10.0013L12.5256 8.35991C12.7697 8.11584 12.7697 7.72011 12.5256 7.47603C12.2815 7.23195 11.8858 7.23195 11.6417 7.47603L10.0003 9.11741L8.35891 7.47601Z"
              stroke="#F3164E"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.0003 1.04297C5.05277 1.04297 1.04199 5.05375 1.04199 10.0013C1.04199 14.9489 5.05277 18.9596 10.0003 18.9596C14.9479 18.9596 18.9587 14.9489 18.9587 10.0013C18.9587 5.05375 14.9479 1.04297 10.0003 1.04297ZM2.29199 10.0013C2.29199 5.74411 5.74313 2.29297 10.0003 2.29297C14.2575 2.29297 17.7087 5.74411 17.7087 10.0013C17.7087 14.2585 14.2575 17.7096 10.0003 17.7096C5.74313 17.7096 2.29199 14.2585 2.29199 10.0013Z"
              stroke="#F3164E"
            />
          </svg>
        </button>
      </div>

      <div className={classes.innerWrapper}>
        <MyInput filter={filter} changeValue={changeValue}></MyInput>

        <SpecializationBlock
          title="Специализация"
          data={skillsAndSpec.specializations}
          setSpecializations={setSkillsAndSpec}
          totalSpec={totals.totalSpec}
          changeSpecialization={changeSpecialization}
          selectedId={filter.specialization}
        />
        <SkillsBlock
          title="Навыки"
          data={skillsAndSpec.skills}
          setSkills={setSkillsAndSpec}
          totalSkills={totals.totalSkills}
          changeSkill={changeSkill}
        />

        <ComplexitiesBlock
          title="Сложность"
          data={complexities}
          changeComplexity={changeComplexity}
        />

        <RatesBlock title="Рейтинг" data={rates} changeRate={changeRate} />
        {/* <StatusesBlock title="Статус" data={statuses}></StatusesBlock> */}
      </div>
    </aside>
  );
}
