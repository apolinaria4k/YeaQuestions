import classes from '../Specialization/Specialization.module.css';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Complexity({ title, value }) {
  const [isActive, setIsActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const complexity = searchParams.get('complexity') || '';

  const changeComplexity = (newComplexity) => {
    const next = new URLSearchParams(searchParams);

    const arrComplexity = complexity.length
      ? complexity.split(',').map((item) => Number(item))
      : [];

    let matches = arrComplexity.filter((item) => newComplexity.includes(item));
    if (matches.length) {
      let filteredComplexity = arrComplexity.filter((item) => !newComplexity.includes(item));

      next.set('complexity', filteredComplexity.join(','));
      next.set('page', String(1));
    } else {
      next.set('complexity', [...arrComplexity, ...newComplexity].join(','));
      next.set('page', String(1));
    }

    setSearchParams(next);
  };

  const handleClick = (value) => {
    setIsActive((prev) => !prev);
    changeComplexity(value);
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
