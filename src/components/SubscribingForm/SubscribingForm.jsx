import { useState } from "react";
import Button from "../Button/Button";
import styles from "./SubscribingForm.module.css";

const SubscribingForm = () => {
    const [formData, setFormData] = useState({
      'email': ''
    });

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>Subscribe to our Newsletter</h2>
      <form className={styles.form}>
        <input
          placeholder="Your Email Address"
          type="text"
          className={styles.form__input}
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <Button color="blue">Subscribe</Button>
      </form>
    </section>
  );
};

export default SubscribingForm;
