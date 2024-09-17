import styles from "./Offers.module.css";

import offer1 from '../../../../images/homePage/offer1.jpg'
import offer2 from '../../../../images/homePage/offer2.jpg'

const Offers = () => {
  return (
    <section className={styles.offers}>
      <a href="#!" className={styles.card}>
        <img src={offer1} alt="background" className={styles.card__background} />
        <span className={styles.card__subtitle}>Natural!!</span>
        <h3 className={styles.card__title}>Get Garden Fresh Fruits</h3>
      </a>
      <a href="#!" className={styles.card}>
        <img src={offer2} alt="background" className={styles.card__background} />
        <span className={`${styles.card__subtitle} ${styles.card__subtitle_dark}`}>Offer!!</span>
        <h3 className={`${styles.card__title} ${styles.card__title_dark}`}>Get 10% off on Vegetables</h3>
      </a>
    </section>
  );
};

export default Offers;
