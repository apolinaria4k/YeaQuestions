import classes from './Footer.module.css';
import Socials from '../UI/Socials/Socials';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapperFooter}>
        <a className={classes.logo} href="#">
          <img src="/logoWhite.svg" alt="Logo" />
        </a>
        <p className={classes.slogan}>Выбери, каким будет IT завтра, вместе с нами</p>
        <p className={classes.textInfo}>
          YeaHub — это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш
          исходный код доступен для просмотра на GitHub. Дизайн проекта также открыт для
          ознакомления в Figma.
        </p>
        <div className={classes.additionalInfo}>
          <div className={classes.copyright}>
            <p className={classes.copyrightText}>© 2024 YeaHub</p>
            <a className={classes.copyrightLink} href="">
              Документы
            </a>
          </div>
          <div className={classes.socials}>
            <p>Ищите нас и в других соцсетях @yeahub_it</p>
            <Socials></Socials>
          </div>
        </div>
      </div>
    </footer>
  );
}
