import classes from './Main.module.css';
import Section from '../section/Section';
import Aside from '../aside/Aside';
export default function App() {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.wrapperMain}>
          <Section></Section>
          <Aside></Aside>
        </div>
      </main>
    </>
  );
}
