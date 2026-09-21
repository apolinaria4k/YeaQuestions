import classes from './SkillDetailedQuestion.module.css';
import { Link } from 'react-router-dom';

export default function SkillDetailedQuestion({ id, title }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  // const skill = searchParams.get('skill') || [];
  //   const handleClick = (id) => {
  //     // setIsActive((prev) => !prev);
  //     // change(id);
  //   };

  return (
    <>
      <Link
        to={`/?skillId=${id}`}
        // onClick={() => handleClick(id)}
        className={classes.button}>
        {title}
      </Link>
    </>
  );
}
