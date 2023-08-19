import styles from "./SecondaryButton.module.css";
import { Link } from "react-router-dom";

function SecondaryButton({to, text, icon}){
    return(
        <Link to={to} className={styles.button}>{icon}{text}</Link>
    )
}

export default SecondaryButton;