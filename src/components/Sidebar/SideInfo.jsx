import { useState, useEffect } from "react";
import myAvatar from "/images/pf3.png";
import styles from "./Sidebar.module.scss";
import { IoChevronDown } from "react-icons/io5";

const SideInfo = ({ handleShow }) => {
  const [resize, setResize] = useState(
    window.matchMedia("(max-width: 480px)").matches
  );

  const winResize = () => {
    setResize(window.matchMedia("(max-width: 480px)").matches);
  };
  useEffect(() => {
    window.addEventListener("resize", winResize);
    return () => {
      window.removeEventListener("resize", winResize);
    };
  }, []);

  return (
    <div
      className={`${styles.sidebar_info} d-flex justify-content-lg-center align-items-center flex-lg-column text-lg-center gap-3`}
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
        className={`${styles.info_more_btn} `}
        data-sidebar-btn=""
        onClick={handleShow}
      >
        {resize ? (
          <span>
            <IoChevronDown />
          </span>
        ) : (
          <span> Show Contacts</span>
        )}

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
