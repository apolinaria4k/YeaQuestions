import classes from './Socials.module.css';

export default function Socials() {
  return (
    <div className={classes.linkList}>
      <a href="#">
        <img src="./Figma.svg" alt="Figma" />
      </a>
      <a href="#">
        <img src="./tg.svg" alt="Telegram" />
      </a>
      <a href="#">
        <img src="./youtube.svg" alt="YouTube" />
      </a>
      <a href="#">
        <img src="./tiktok.svg" alt="TikTok" />
      </a>
      <a href="#">
        <img src="./github.svg" alt="GitHub" />
      </a>
    </div>
  );
}
