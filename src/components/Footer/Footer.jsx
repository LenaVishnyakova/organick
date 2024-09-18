import styles from "./Footer.module.css";

import logo from "../../images/header/logo.svg";
import iconInstagram from "../../images/footer/iconInstagram.svg";
import iconFacebook from "../../images/footer/iconFacebook.svg";
import iconTwitter from "../../images/footer/iconTwitter.svg";
import iconPinterest from "../../images/footer/iconPinterest.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer__top}>

          <div className={styles.contacts}>
            <h5 className={styles.contacts__title}>Contact Us</h5>
            <ul className={styles.contacts__list}>
                <li className={styles.contacts__item}>
                    <span className={styles.contacts__name}>Email</span>
                    <span className={styles.contacts__data}>needhelp@Organia.com</span>
                </li>
                <li className={styles.contacts__item}>
                    <span className={styles.contacts__name}>Phone</span>
                    <span className={styles.contacts__data}>666 888 888</span>
                </li>
                <li className={styles.contacts__item}>
                    <span className={styles.contacts__name}>Address</span>
                    <span className={styles.contacts__data}>88 road, borklyn street, USA</span>
                </li>
            </ul>
          </div>

          <div className={styles.about}>
            <img
              src={logo}
              alt="organick logo"
              className={styles.about__logo}
            />
            <span className={styles.about__text}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </span>
            <ul className={styles.about__links}>
              <li className={styles.about__link}>
                <img
                  src={iconInstagram}
                  alt="instagram"
                  className={styles.about__link}
                />
              </li>
              <li className={styles.about__link}>
                <img
                  src={iconFacebook}
                  alt="facebook"
                  className={styles.about__link}
                />
              </li>
              <li className={styles.about__link}>
                <img
                  src={iconTwitter}
                  alt="twitter"
                  className={styles.about__link}
                />
              </li>
              <li className={styles.about__link}>
                <img
                  src={iconPinterest}
                  alt="pinterest"
                  className={styles.about__link}
                />
              </li>
            </ul>
          </div>

          <div className={styles.utilities}>
            <h5 className={styles.utilities__title}>Utility Pages</h5>
            <ul className={styles.utilities__list}>
              <li className={styles.utilities__item}>
                <a href="#!">Style Guide</a>
              </li>
              <li className={styles.utilities__item}>
                <a href="#!">404 Not Found</a>
              </li>
              <li className={styles.utilities__item}>
                <a href="#!">Password Protected</a>
              </li>
              <li className={styles.utilities__item}>
                <a href="#!">Licences</a>
              </li>
              <li className={styles.utilities__item}>
                <a href="#!">Changelog</a>
              </li>
            </ul>
          </div>
        </div>
        <span className={styles.footer__copyright}>
          Copyright © Organick | Designed by VictorFlow Templates - Powered by
          Webflow
        </span>
      </div>
    </footer>
  );
};

export default Footer;
