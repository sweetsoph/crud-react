import styles from './Card.module.css';
import { MdDeleteOutline, MdEdit } from 'react-icons/md';

import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

function ProjectCard({project}){
    const path = `/projects/${project.id}`;
    return(
        <div className={styles.card}>
            <h2>{project.name}</h2>
            <h3>{project.category.name}</h3>
            <p>Orçamento: R${project.budget},00</p>
            <div className={styles.groupButtons}>
                <SecondaryButton to={path} text="Editar" icon={<MdEdit/>}/>
                <PrimaryButton to={path} text="Excluir" icon={<MdDeleteOutline/>}/>
            </div>
        </div>
    )
}

export default ProjectCard;