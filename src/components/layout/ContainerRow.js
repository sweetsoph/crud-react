import styles from './ContainerRow.module.css';

function ContainerRow({children, align, space}){
    return(
        <div className={`${styles.container} ${styles[align]} ${styles[space]}`}>
            {children}
        </div>
    )
}

export default ContainerRow;