import styles from "./Button.module.css";

import arrow from '../../images/button/buttonArrow.svg'

const Button = (props) => {
  return (
    <button className={
        (props.color === 'yellow' && `${styles.button} ${styles.button_yellow}`)
     || (props.color === 'blue' && `${styles.button} ${styles.button_blue}`)
     || styles.button
     }>
      <span>{props.children}</span>
      <img src={arrow} alt="arrow" />
    </button>
  );
};

export default Button;
