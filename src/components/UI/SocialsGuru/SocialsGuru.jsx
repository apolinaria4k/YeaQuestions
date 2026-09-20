import classes from './SocialsGuru.module.css';

export default function Socials() {
  return (
    <div className={classes.linkList}>
      <a className={classes.link} href="#">
        <img src="/TelegramPurple.svg" alt="Figma" />
      </a>
      <a className={classes.link} href="#">
        <img src="/YoutubePurple.svg" alt="Telegram" />
      </a>
      <a className={classes.link} href="#">
        <img src="/ProfilePurple.svg" alt="YouTube" />
      </a>
    </div>
  );
}
