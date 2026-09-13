import classes from '../Specialization/Specialization.module.css';
import { useState } from 'react';

export default function Status({ title, id }) {
  const [selectedId, setSelectedId] = useState(0);

  const handleClick = (id) => {
    setSelectedId(id);
  };

  return (
    <div>
      <button
        id={id}
        onClick={handleClick}
        className={selectedId === id ? classes.activeButton : classes.button}>
        {title}
      </button>
    </div>
  );
}
