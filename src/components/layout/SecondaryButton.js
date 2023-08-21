import styles from "./SecondaryButton.module.css";
import { Link } from "react-router-dom";

function SecondaryButton({ to, action, text, icon }) {
  if (action) {
    return (
      <button onClick={action} className={styles.button}>
        {icon}
        {text}
      </button>
    );
  } else {
    return (
      <Link to={to} className={styles.button}>
        {icon}
        {text}
      </Link>
    );
  }
}

export default SecondaryButton;
