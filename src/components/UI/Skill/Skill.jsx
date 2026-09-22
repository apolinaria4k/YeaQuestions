import { useState } from 'react';
import classes from '../Specialization/Specialization.module.css';
import { useSearchParams } from 'react-router-dom';

export default function Skill({ title, id }) {
  const [isActive, setIsActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const skills = searchParams.get('skills') || '';

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
    setIsActive((prev) => !prev);
    changeSkill(id);
  };

  return (
    <>
      <button
        onClick={() => handleClick(id)}
        className={isActive ? classes.activeButton : classes.button}>
        {title}
      </button>
    </>
  );
}
