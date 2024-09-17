import styles from "./FoodCart.module.css";

import foodImg from "../../images/food/broccoli.jpg";
import stars from "../../images/shopPage/foodStars.png";

const FoodCard = (props) => {
    return (
    <article className={styles.card}>
      <span className={styles.card__type}>{props.info.type}</span>
      <img src={foodImg} alt={props.info.name} className={styles.card__foodImg} />
      <span className={styles.card__title}>{props.info.name}</span>
      <div className={styles.card__priceWrapper}>
        <span className={styles.card__oldPrice}>${props.info.oldPrice}</span>
        <span className={styles.card__newPrice}>${props.info.newPrice}</span>
        <img src={stars} alt="stars" className={styles.card__stars} />
      </div>
    </article>
  );
};

export default FoodCard;
