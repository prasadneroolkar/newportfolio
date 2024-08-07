import React from "react";
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import styles from "./SidebarContact.module.scss";

const SidebarContact = () => {
  return (
    <div className={styles.sidebar_info_more}>
      <ul className={styles.contacts_list}>
        <li className={styles.contact_item}>
          <div className={styles.icon_box}>
            <CiMail
              name="mail-outline"
              role="img"
              class="md hydrated"
              aria-label="mail outline"
            ></CiMail>
          </div>

          <div className={styles.contact_info}>
            <p className={styles.contact_title}>Email</p>

            <a
              href="mailto:prasadneroolkar90@gmail.com"
              className={styles.contact_link}
            >
              prasadneroolkar90@gmail.com
            </a>
          </div>
        </li>

        <li className={styles.contact_item}>
          <div className={styles.icon_box}>
            <IoIosPhonePortrait
              name="phone-portrait-outline"
              role="img"
              class="md hydrated"
              aria-label="phone portrait outline"
            ></IoIosPhonePortrait>
          </div>

          <div className={styles.contact_info}>
            <p className={styles.contact_title}>Phone</p>

            <a href="tel:+917406996770" className={styles.contact_link}>
              7406996770
            </a>
          </div>
        </li>

        <li className={styles.contact_item}>
          <div className={styles.icon_box}>
            <IoCalendarOutline
              name="calendar-outline"
              role="img"
              class="md hydrated"
              aria-label="calendar outline"
            ></IoCalendarOutline>
          </div>

          <div className={styles.contact_info}>
            <p className={styles.contact_title}>Birthday</p>

            <time dateTime="1991-08-11">August 11, 1991</time>
          </div>
        </li>

        <li className={styles.contact_item}>
          <div className={styles.icon_box}>
            <CiLocationOn
              name="location-outline"
              role="img"
              class="md hydrated"
              aria-label="location outline"
            ></CiLocationOn>
          </div>

          <div className={styles.contact_info}>
            <p className={styles.contact_title}>Location</p>

            <address>Porvorim, Goa</address>
          </div>
        </li>
      </ul>

      <div className="separator"></div>

      <ul className="social-list">
        <li className="social-item">
          <a href="#" className="social-link">
            <ion-icon
              name="logo-facebook"
              role="img"
              class="md hydrated"
              aria-label="logo facebook"
            ></ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a href="#" className="social-link">
            <ion-icon
              name="logo-twitter"
              role="img"
              class="md hydrated"
              aria-label="logo twitter"
            ></ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a href="#" className="social-link">
            <ion-icon
              name="logo-instagram"
              role="img"
              class="md hydrated"
              aria-label="logo instagram"
            ></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidebarContact;
