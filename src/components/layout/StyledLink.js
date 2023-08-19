import styles from "./StyledLink.module.css";
import { Link } from "react-router-dom";

function StyledLink({ to, children }) {
  return (
    <Link to={to} className={styles.linkStyle}>
      {children}
    </Link>
  );
}

export default StyledLink;