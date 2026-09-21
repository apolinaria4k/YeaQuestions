import classes from './SkillDetailedQuestion.module.css';

export default function SkillDetailedQuestion({ title }) {
  //   const handleClick = (id) => {
  //     // setIsActive((prev) => !prev);
  //     // change(id);
  //   };

  return (
    <>
      <button
        // onClick={() => handleClick(id)}
        className={classes.button}>
        {title}
      </button>
    </>
  );
}
