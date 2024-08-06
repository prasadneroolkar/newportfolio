import React from "react";

const SidebarContact = () => {
  return (
    <div className="sidebar-info_more">
      <ul className="contacts-list">
        <li className="contact-item">
          <div className="icon-box">
            <ion-icon
              name="mail-outline"
              role="img"
              class="md hydrated"
              aria-label="mail outline"
            ></ion-icon>
          </div>

          <div className="contact-info">
            <p className="contact-title">Email</p>

            <a href="mailto:richard@example.com" className="contact-link">
              richard@example.com
            </a>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <ion-icon
              name="phone-portrait-outline"
              role="img"
              class="md hydrated"
              aria-label="phone portrait outline"
            ></ion-icon>
          </div>

          <div className="contact-info">
            <p className="contact-title">Phone</p>

            <a href="tel:+12133522795" className="contact-link">
              +1 (213) 352-2795
            </a>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <ion-icon
              name="calendar-outline"
              role="img"
              class="md hydrated"
              aria-label="calendar outline"
            ></ion-icon>
          </div>

          <div className="contact-info">
            <p className="contact-title">Birthday</p>

            <time dateTime="1982-06-23">June 23, 1982</time>
          </div>
        </li>

        <li className="contact-item">
          <div className="icon-box">
            <ion-icon
              name="location-outline"
              role="img"
              class="md hydrated"
              aria-label="location outline"
            ></ion-icon>
          </div>

          <div className="contact-info">
            <p className="contact-title">Location</p>

            <address>Sacramento, California, USA</address>
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
