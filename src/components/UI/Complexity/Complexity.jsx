import classes from '../Specialization/Specialization.module.css';
import { useState } from 'react';

export default function Complexity({ title, id, change }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    setIsActive((prev) => !prev);
    change(e.target.id.split(','));
  };

  return (
    <div>
      <button
        id={id}
        onClick={handleClick}
        className={isActive ? classes.activeButton : classes.button}>
        {title}
      </button>
    </div>
  );
}
