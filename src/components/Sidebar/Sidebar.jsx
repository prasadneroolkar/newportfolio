import styles from "./Sidebar.module.scss";

const Sidebar = ({ children, showStatus }) => {
  return (
    <aside
      className={`${styles.sidebar} ${
        showStatus ? styles.active : styles.hide
      } `}
    >
      {children}
    </aside>
  );
};

export default Sidebar;
