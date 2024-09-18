import { useEffect, useState } from "react";

import styles from "./FoodInfo.module.css";

import food from "../../../../images/food/broccoli.jpg";
import stars from "../../../../images/shopPage/foodStars.png";
import Button from "../../../Button/Button";

import data from '../../../../data.json'

const FoodInfo = ({id}) => {
  const [count, setCount] = useState("");

  const [info, setInfo] = useState({
    "type": "",
    "name": "",
    "oldPrice": "",
    "newPrice": ""
  });

  useEffect(() => {
    for (var i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        setInfo(data[i]);
      }
    }
  }, []);

  return (
    <section className={styles.card}>
      <div className={styles.card__img}>
        <img src={food} alt="food image" />
        <span>{info.type}</span>
      </div>
      <div className={styles.card__info}>
        <h3 className={styles.card__title}>{info.name}</h3>
        <img src={stars} alt="stars" className={styles.card__stars} />
        <div className={styles.card__prices}>
          <span className={styles.card__oldPrice}>${info.oldPrice}</span>
          <span className={styles.card__newPrice}>${info.newPrice}</span>
        </div>
        <p className={styles.card__text}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley.
        </p>
        <form className={styles.form}>
          <label htmlFor="" className={styles.form__label}>
            Quantity :
          </label>
          <input
            name="count"
            value={count}
            onChange={(event) => setCount(event.target.value)}
            type="text"
            className={styles.form__input}
          />
          <Button color="blue">Add To Cart</Button>
        </form>
      </div>
    </section>
  );
};

export default FoodInfo;
