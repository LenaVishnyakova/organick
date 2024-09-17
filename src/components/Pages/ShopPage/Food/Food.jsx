import { useState } from 'react';
import FoodCard from '../../../FoodCard/FoodCard';
import styles from './Food.module.css'

import data from '../../../../data.json'
import { Link } from 'react-router-dom';

const Food = () => {
    const [foodList, setFoodList] = useState(data);

    return ( <section className={styles.food}>
<div className={styles.food__content}>
    {foodList.map(foodItem => <Link to={`/food/${foodItem.id}`}><FoodCard key={foodItem.id} info={foodItem} /></Link>)}
</div>
    </section> );
}
 
export default Food;