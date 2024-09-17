import Hero from './Hero/Hero';
import Offers from './Offers/Offers';
import styles from './HomePage.module.css'

const HomePage = () => {
    return (
    <div className={styles.page}>
        <Hero />
        <Offers />
    </div> );
}
 
export default HomePage;