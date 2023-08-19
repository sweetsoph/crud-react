import styles from "./PrimaryButton.module.css";
import { Link } from "react-router-dom";

function PrimaryButton({ action, to, text, icon }) {
  return (
    <div>
      {action ? (
        <Link onClick={action} className={styles.button}>
          {icon}
          {text}
        </Link>
      ) : (
        <Link to={to} className={styles.button}>
          {icon}
          {text}
        </Link>
      )}
    </div>
  );
}

export default PrimaryButton;
