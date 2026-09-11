import { useState } from 'react';
import classes from './Variant.module.css';

export default function Variant({ title, id, changeSpecialization }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (e) => {
    changeSpecialization(Number(e.target.id));
    setIsActive((prev) => !prev);
  };

  return (
    <div>
      <button
        id={id}
        onClick={handleClick}
        className={`${classes.button} ${isActive && classes.activeButton}`}>
        {title}
      </button>
    </div>
  );
}
