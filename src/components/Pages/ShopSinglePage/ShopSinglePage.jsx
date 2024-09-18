import { useParams } from 'react-router-dom';
import FoodInfo from './FoodInfo/FoodInfo';
import styles from './ShopSinglePage.module.css'
import { useEffect, useState } from 'react';


const ShopSinglePage = () => {
    const {id} = useParams();

    return ( <div className={styles.page}>
        <h1 className={styles.page__title}>Shop Single</h1>

        <FoodInfo id={id}/>
    </div> );
}
 
export default ShopSinglePage;