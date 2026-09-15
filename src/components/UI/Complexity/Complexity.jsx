import classes from '../Specialization/Specialization.module.css';
import { useState } from 'react';

export default function Complexity({ title, value, change }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (value) => {
    setIsActive((prev) => !prev);
    change(value);
  };

  return (
    <div>
      <button
        onClick={() => handleClick(value)}
        className={isActive ? classes.activeButton : classes.button}>
        {title}
      </button>
    </div>
  );
}
