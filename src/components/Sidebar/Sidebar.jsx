import styles from "./Sidebar.module.scss";

const Sidebar = ({ children, showStatus }) => {
  return (
    <aside className={`${styles.sidebar} ${showStatus ? styles.active : ""} `}>
      {children}
    </aside>
  );
};

export default Sidebar;
