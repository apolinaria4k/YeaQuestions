import classes from '../aside/Aside.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';
import Variant from '../UI/Variant/Variant';
import { useState } from 'react';

export default function StatusesBlock({ title, data }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <MyTitle title={title} />
      <div className={classes.variants}>
        {data.map((item) => (
          <Variant
            onClick={() => handleClick(item)}
            isActive={selectedId === item}
            key={item}
            title={item}
          />
        ))}
      </div>
    </div>
  );
}
