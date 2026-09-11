import { useState } from 'react';
import classes from '../aside/Aside.module.css';
import MyTitle from '../UI/MyTitle/MyTitle';
import Variant from '../UI/Variant/Variant';

export default function ComplexityBlock({ title, data, changeComplexity }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleClick = (item) => {
    changeComplexity(item.value);
    setSelectedId((prev) => (prev === item.id ? null : item.id));
  };
  return (
    <div>
      <MyTitle title={title} />
      <div className={classes.variants}>
        {data.map((item) => (
          <Variant
            onClick={() => handleClick(item)}
            isActive={selectedId === item.id}
            key={item.id}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
