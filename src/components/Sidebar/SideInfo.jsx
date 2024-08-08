import React from "react";
import myAvatar from "../../assets/images/my-avatar.png";
import styles from "./Sidebar.module.scss";

const SideInfo = () => {
  return (
    <div
      className={`${styles.sidebar_info} d-flex justify-content-lg-center align-items-center flex-lg-column text-center gap-3`}
    >
      <figure className={styles.avatar_box}>
        <img src={myAvatar} alt="Prasad Neroolkar" />
      </figure>

      <div className={styles.info_content}>
        <h1 className={styles.name} title="Prasad Neroolkar">
          Prasad Neroolkar
        </h1>
        <p className={styles.title}>Front end developer</p>
      </div>

      <button
        className="info_more-btn btn btn-primary d-none"
        data-sidebar-btn=""
      >
        <span>Show Contacts</span>

        <ion-icon
          name="chevron-down"
          role="img"
          class="md hydrated"
          aria-label="chevron down"
        ></ion-icon>
      </button>
    </div>
  );
};

export default SideInfo;
