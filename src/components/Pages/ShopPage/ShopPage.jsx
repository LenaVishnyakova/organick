import Food from './Food/Food';
import styles from './ShopPage.module.css'

const ShopPage = () => {
    return ( <div>
        <div className={styles.title}>Shop</div>

        <Food />
    </div> );
}
 
export default ShopPage;