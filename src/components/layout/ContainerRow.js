import styles from './ContainerRow.module.css';

function ContainerRow({children}){
    return(
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default ContainerRow;