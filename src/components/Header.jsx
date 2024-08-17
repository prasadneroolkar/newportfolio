import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={`${styles.navbar_link} ${styles.active}`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="resume" className={`${styles.navbar_link}`}>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink to="portfolio" className={`${styles.navbar_link}`}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="contact" className={`${styles.navbar_link}`}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
