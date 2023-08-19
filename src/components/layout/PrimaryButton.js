import styles from "./PrimaryButton.module.css";
import { Link } from "react-router-dom";

function PrimaryButton({to, text, icon}){
    return(
        <Link to={to} className={styles.button}>{icon}{text}</Link>
    )
}

export default PrimaryButton;