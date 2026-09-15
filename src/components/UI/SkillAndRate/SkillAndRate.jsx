import classes from '../Specialization/Specialization.module.css';
import { useState } from 'react';

export default function SkillAndRate({ title, id, change }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (id) => {
    setIsActive((prev) => !prev);
    change(id);
  };

  return (
    <div>
      <button
        id={id}
        onClick={() => handleClick(id)}
        className={isActive ? classes.activeButton : classes.button}>
        {title}
      </button>
    </div>
  );
}
