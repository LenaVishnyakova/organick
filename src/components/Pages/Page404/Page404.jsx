import { Link } from 'react-router-dom';

import styles from './Page404.module.css'

import code from '../../../images/page404/404.svg'
import Button from '../../Button/Button';

const Page404 = () => {
    return ( <div className={styles.page}>
        <div className={styles.page__content}>
            <img src={code} alt="404" className={styles.page__code} />
            <h1 className={styles.page__title}>Page not found</h1>
            <span className={styles.page__subtitle}>The page you are looking for doesn't exist or has been moved</span>

            <Link to="/"><Button color="blue">Go To HomePage</Button></Link>
        </div>
    </div> );
}
 
export default Page404;