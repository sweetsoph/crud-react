import styles from "./Container.module.css"

function Container({children, align}) {
    return (
        <div className={`${styles.container} ${styles[align]}`}>
            {children}
        </div>
    )
}

export default Container