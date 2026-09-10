import classes from './Socials.module.css';

export default function Socials() {
  return (
    <div className={classes.linkList}>
      <a className={classes.link} href="#">
        <img src="./Figma.svg" alt="Figma" />
      </a>
      <a className={classes.link} href="#">
        <img src="./tg.svg" alt="Telegram" />
      </a>
      <a className={classes.link} href="#">
        <img src="./youtube.svg" alt="YouTube" />
      </a>
      <a className={classes.link} href="#">
        <img src="./tiktok.svg" alt="TikTok" />
      </a>
      <a className={classes.link} href="#">
        <img src="./github.svg" alt="GitHub" />
      </a>
    </div>
  );
}
