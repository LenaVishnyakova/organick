import Food from './Food/Food';
import styles from './ShopPage.module.css'

const ShopPage = () => {
    return ( <div>
        <h1 className={styles.title}>Shop</h1>
        <Food />
    </div> );
}
 
export default ShopPage;