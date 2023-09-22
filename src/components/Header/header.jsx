import React from "react";
import style from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import burgerpart from "../../assets/images/burger.png";
export const Header = () => {
  return (
    <header className={style["header"]}>
      <div className={`container ${style["header__items"]}`}>
        <div className={style["header__part"]}>
          <div className={style["header__logo"]}>
            <img src={logo} alt="kjbj" />
          </div>

          <ul className={style["header__item"]}>
            <li>
              <a className={style["header-href"]} href="#home">
                Home
              </a>
            </li>
            <li>
              <a className={style["header-href"]} href="#about">
                About
              </a>
            </li>
            <li>
              <a className={style["header-href"]} href="#services">
                Services
              </a>
            </li>
            <li>
              <a className={style["header-href"]} href="#articles">
                Articles
              </a>
            </li>
            <li>
              <a className={style["header-href"]} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={style["header__part"]}>
          <p className={style["header__cart"]}>Cart(0)</p>
          <button className={style["header__button"]}>Get a free quote</button>
          <div className={style["header__logos"]}>
            <img src={burgerpart} alt="kjbj" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
