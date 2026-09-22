import classes from './SkillDetailedQuestion.module.css';
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

export default function SkillDetailedQuestion({ id, title }) {
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

  return (
    <>
      <Link to={`/?skills=${id}`} onClick={() => changeSkill(id)} className={classes.button}>
        {title}
      </Link>
    </>
  );
}
