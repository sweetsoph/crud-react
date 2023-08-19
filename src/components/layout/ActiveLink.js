import styles from "./ActiveLink.module.css";
import { Link } from "react-router-dom";

function ActiveLink({ to, children }) {
  return (
    <Link to={to} className={styles.linkStyle}>
      {children}
    </Link>
  );
}

export default ActiveLink;