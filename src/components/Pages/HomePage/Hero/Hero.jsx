import Button from '../../../Button/Button';
import styles from './Hero.module.css'

const Hero = () => {
    return ( <section className={styles.hero}>
        <div className={styles.hero__content}>
            <span className={styles.hero__subtitle}>100% Natural Food</span>
            <h1 className={styles.hero__title}>Choose the best healthier way of life</h1>
            <Button color='yellow'>Explore Now</Button>
        </div>
    </section> );
}
 
export default Hero;