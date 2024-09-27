import { useContext } from "react";
import styles from "./Sidebar.module.scss";
import { contextCreate } from "../../Store";

const Sidebar = ({ children }) => {
  const { show } = useContext(contextCreate);

  return (
    <aside className={`${styles.sidebar} ${show ? styles.active : " "} `}>
      {children}
    </aside>
  );
};

export default Sidebar;
