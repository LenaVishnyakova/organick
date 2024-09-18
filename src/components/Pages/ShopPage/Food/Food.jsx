import { useState } from "react";
import FoodCard from "../../../FoodCard/FoodCard";
import styles from "./Food.module.css";

import data from "../../../../data.json";
import { Link } from "react-router-dom";

const Food = () => {
  const [foodList, setFoodList] = useState(data);

  return (
    <section className={styles.food}>
      <div className={styles.food__content}>
        {foodList.map((foodItem) => (
          <Link key={foodItem.id} className={styles.food__link} to={`/food/${foodItem.id}`}>
            <FoodCard info={foodItem} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Food;
