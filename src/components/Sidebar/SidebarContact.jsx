import { useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoCalendarOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import styles from "./SidebarContact.module.scss";

const SidebarContact = ({ disBtn }) => {
  return (
    <>
      {disBtn && (
        <>
          <div
            className={`${styles.sidebar_info_more} ${
              disBtn ? styles.active : ""
            } `}
          >
            <div className={styles.separator}></div>
            <ul className={styles.contacts_list}>
              <li className={styles.contact_item}>
                <div className={styles.icon_box}>
                  <CiMail
                    name="mail-outline"
                    role="img"
                    className="md hydrated"
                    aria-label="mail outline"
                  ></CiMail>
                </div>

                <div className={styles.contact_info}>
                  <p className={styles.contact_title}>Email</p>

                  <a
                    href="mailto:prasadneroolkar90@gmail.com"
                    className={styles.contact_link}
                    title="prasadneroolkar90@gmail.com"
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
                    className="md hydrated"
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
                    className="md hydrated"
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
                    className="md hydrated"
                    aria-label="location outline"
                  ></CiLocationOn>
                </div>

                <div className={styles.contact_info}>
                  <p className={styles.contact_title}>Location</p>

                  <address>Porvorim, Goa</address>
                </div>
              </li>
            </ul>

            <div className={`${styles.separator} d-lg-none`}></div>

            <ul
              className="social_list justify-content-lg-center d-flex align-items-center
gap-3 px-1 my-sm-0"
            >
              <li className="social_item ">
                <a href="#" className="social_link">
                  <FaLinkedin
                    name="logo-instagram"
                    role="img"
                    className="md hydrated"
                    aria-label="logo linkedIn"
                  ></FaLinkedin>
                </a>
              </li>
              <li className="social_item ">
                <a href="#" className="social_link">
                  <FaGithub
                    name="logo-instagram"
                    role="img"
                    className="md hydrated"
                    aria-label="logo github"
                  ></FaGithub>
                </a>
              </li>

              <li className="social_item ">
                <a href="#" className="social_link">
                  <FaInstagram
                    name="logo-instagram"
                    role="img"
                    className="md hydrated"
                    aria-label="logo instagram"
                  ></FaInstagram>
                </a>
              </li>
              <li className="social_item">
                <a href="#" className="social_link">
                  <FaFacebook
                    name="logo-facebook"
                    role="img"
                    className="md hydrated"
                    aria-label="logo facebook"
                  ></FaFacebook>
                </a>
              </li>
              <li className="social_item">
                <a href="#" className="social_link">
                  <FaTwitter
                    name="logo-twitter"
                    role="img"
                    className="md hydrated"
                    aria-label="logo twitter"
                  ></FaTwitter>
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default SidebarContact;
