import { useSearchParams } from 'react-router-dom';
import classes from '../Specialization/Specialization.module.css';

export default function Skill({ title, id }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const skills = searchParams.get('skills') || '';
  const arrSkills = skills.split(',').map((skill) => Number(skill));

  const changeSkill = (skill) => {
    const next = new URLSearchParams(searchParams);

    const arrSkills = skills.length ? skills.split(',').map((item) => Number(item)) : [];

    const newSkills = arrSkills.includes(skill)
      ? arrSkills.filter((s) => s !== skill)
      : [...arrSkills, skill];

    next.set('skills', newSkills.join(','));
    next.set('page', String(1));

    setSearchParams(next);
  };

  const handleClick = (id) => {
    changeSkill(id);
  };

  return (
    <>
      <button
        onClick={() => handleClick(id)}
        className={arrSkills.includes(id) ? classes.activeButton : classes.button}>
        {title}
      </button>
    </>
  );
}
