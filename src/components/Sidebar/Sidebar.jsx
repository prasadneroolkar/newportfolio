import styles from "./Sidebar.module.scss";

const Sidebar = ({ children }) => {
  return <aside className={styles.sidebar}>{children}</aside>;
};

export default Sidebar;
