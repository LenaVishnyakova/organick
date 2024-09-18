import { NavLink } from "react-router-dom";

import styles from "./Header.module.css";

import logo from "../../images/header/logo.svg";
import iconSearch from "../../images/header/icon-search.png";
import iconCart from "../../images/header/icon-cart.png";
import { useState } from "react";

const Header = () => {
  const [formData, setFormData] = useState({
    "targetSearch": ""
  });

  function handleChange(event) {
    const {name, value} = event.target

    setFormData(prevForm => ({
      ...prevForm,
      [name]: value
    }))
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <img className={styles.header__logo} src={logo} alt="organick logo" />
        <nav className={styles.nav}>
          <NavLink to="/" className={styles.nav__item}>
            Home
          </NavLink>
          <NavLink to="/about" className={styles.nav__item}>
            About
          </NavLink>
          <span className={styles.nav__item}>Pages</span>
          <NavLink to="/shop" className={styles.nav__item}>
            Shop
          </NavLink>
          <span className={styles.nav__item}>Projects</span>
          <span className={styles.nav__item}>News</span>
        </nav>

        <div className={styles.header__rightSide}>
          <form className={styles.form}>
            <input
              className={styles.form__input}
              type="text"
              name="targetSearch"
              value={formData.targetSearch}
              onChange={handleChange}
            />
            <button className={styles.form__button}>
              <img src={iconSearch} alt="search" />
            </button>
          </form>
          <div className={styles.cart}>
            <img className={styles.cart__icon} src={iconCart} alt="cart" />
            <span className={styles.cart__text}>Cart (0)</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
