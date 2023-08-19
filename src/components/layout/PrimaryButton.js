import styles from "./PrimaryButton.module.css";
import { Link } from "react-router-dom";

function PrimaryButton({to, text}){
    return(
        <Link to={to} className={styles.button}>{text}</Link>
    )
}

export default PrimaryButton;