import styles from './Card.module.css';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';

import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

function ProjectCard({project}){
    return(
        <div className={styles.card}>
            <h2>{project.name}</h2>
            <h3>{project.category.name}</h3>
            <p>R${project.budget},00</p>
            <div className={styles.groupButtons}>
                <SecondaryButton text="Editar" icon={<MdEdit/>}/>
                <PrimaryButton text="Excluir" icon={<MdDeleteOutline/>}/>
            </div>
        </div>
    )
}

export default ProjectCard;