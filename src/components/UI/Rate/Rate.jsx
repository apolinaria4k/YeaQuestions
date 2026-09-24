import { useSearchParams } from 'react-router-dom';
import classes from '../Specialization/Specialization.module.css';

export default function Rate({ title }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const rate = searchParams.get('rate') || '';
  const arrRate = rate.split(',').map((r) => Number(r));

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
    changeRate(id);
  };

  return (
    <>
      <button
        onClick={() => handleClick(title)}
        className={arrRate.includes(title) ? classes.activeButton : classes.button}>
        {title}
      </button>
    </>
  );
}
