import styles from '../styles/Footer.module.css';
import { BsGithub, BsInstagram, BsFacebook } from 'react-icons/bs';
import { SiNotion } from 'react-icons/si';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <ul className={styles.listWrap}>
        <li className={styles.list}>
          <a
            className={styles.iconWrap}
            href="https://github.com/wook2onandon/"
          >
            <BsGithub className={styles.icon} />
          </a>
        </li>
        <li className={styles.list}>
          <a
            className={styles.iconWrap}
            href="https://www.instagram.com/wook2onandon"
          >
            <BsInstagram className={styles.icon} />
          </a>
        </li>
        <li className={styles.list}>
          <a
            className={styles.iconWrap}
            href="https://www.facebook.com/wook2onandon"
          >
            <BsFacebook className={styles.icon} />
          </a>
        </li>
        <li className={styles.list}>
          <a
            className={styles.iconWrap}
            href="https://grave-jute-6f6.notion.site/WOOK-s-Portfolio-a465e17624d141378fdc4b8effba7d78"
          >
            <SiNotion className={styles.icon} />
          </a>
        </li>
      </ul>
      <div className={styles.text}>
        © 2023. Kim Jong Wook. All rights reserved.
      </div>
    </footer>
  );
}
