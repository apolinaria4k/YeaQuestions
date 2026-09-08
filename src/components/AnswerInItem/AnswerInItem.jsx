import classes from './AnswerInItem.module.css';
import Characteristic from '../characteristic/Characteristic';

export default function AnswerInItem() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapperCharacter}>
        <Characteristic title="Рейтинг" value={4}></Characteristic>
        <Characteristic title="Сложность" value={10}></Characteristic>
      </div>
      <img className={classes.image} src="./" alt="" />
      <p className={classes.textOfAnswer}>
        Virtual DOM (виртуальный DOM) — это программная концепция, используемая в разработке
        веб-приложений для повышения эффективности обновлений интерфейса. Это представление
        реального DOM (структуры документа, отображаемого в браузере) в памяти, которое позволяет
        оптимизировать изменения, минимизируя взаимодействие с реальным DOM, что ускоряет рендеринг
        и обновление страниц. При изменении данных приложения Virtual DOM сравнивает новое состояние
        с предыдущим и обновляет только те части реального DOM, которые изменились, вместо
        перерисовки всего документа.
      </p>
    </div>
  );
}
