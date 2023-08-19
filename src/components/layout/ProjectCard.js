import styles from './Card.module.css';

function ProjectCard({project}){
    return(
        <div className={styles.card}>
            <h2>{project.name}</h2>
            <h3>{project.category.name}</h3>
            <p>{project.budget}</p>
        </div>
    )
}

export default ProjectCard;