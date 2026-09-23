import parse from 'html-react-parser';
import DetailedQuestionTitle from '../DetailedQuestionTitle/DetailedQuestionTitle';
import NextPreviousButtons from '../NextPreviousButtons/NextPreviousButtons';
import LongAnswer from '../UI/LongAnswer/LongAnswer';
import ShortAnswer from '../UI/ShortAnswer/ShortAnswer';
import { sanitizeHtml } from '../utils/sanitizeHtml';
import classes from './SectionDetailedQuestion.module.css';

export default function SectionDetailedQuestion({
  title,
  description,
  shortAnswer,
  longAnswer,
  setIsVisible,
}) {
  return (
    <section className={classes.section}>
      <div className={classes.blockWrapper}>
        <div className={classes.svgWrapper}>
          <DetailedQuestionTitle
            setIsVisible={setIsVisible}
            title={title}
            description={description}
          />
        </div>
      </div>
      <div className={classes.blockWrapper}>
        <NextPreviousButtons />
      </div>
      <div className={classes.blockWrapper}>
        <ShortAnswer text={parse(sanitizeHtml(shortAnswer))} />
      </div>
      <div className={classes.blockWrapper}>
        <LongAnswer text={parse(sanitizeHtml(longAnswer))}></LongAnswer>
      </div>
    </section>
  );
}
