import { useSearchParams } from 'react-router-dom';
import classes from '../Specialization/Specialization.module.css';
import { useState } from 'react';

export default function Rate({ title }) {
  const [isActive, setIsActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const rate = searchParams.get('rate') || '';

  const changeRate = (newRate) => {
    const next = new URLSearchParams(searchParams);

    const arrRates = rate.length ? rate.split(',').map((item) => Number(item)) : [];
    const newRates = arrRates.includes(newRate)
      ? arrRates.filter((s) => s !== newRate)
      : [...arrRates, newRate];
    next.set('rate', newRates.join(','));
    next.set('page', String(1));

    setSearchParams(next);
  };

  const handleClick = (id) => {
    setIsActive((prev) => !prev);
    changeRate(id);
  };

  return (
    <>
      <button
        onClick={() => handleClick(title)}
        className={isActive ? classes.activeButton : classes.button}>
        {title}
      </button>
    </>
  );
}
