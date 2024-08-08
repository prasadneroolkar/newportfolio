import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="" className={`${styles.navbar_link} ${styles.active}`}>
              About
            </a>
          </li>
          <li>
            <a href="" className={`${styles.navbar_link}`}>
              Resume
            </a>
          </li>
          <li>
            <a href="" className={`${styles.navbar_link}`}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="" className={`${styles.navbar_link}`}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
