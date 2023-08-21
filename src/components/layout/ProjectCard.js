import styles from "./Card.module.css";
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function ProjectCard({ project, handleRemove }) {
  const path = `/projects/${project.id}`;
  const idProjeto = project.id;

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("Clicou");
    handleRemove(idProjeto);
  };

  return (
    <div className={styles.card}>
      <h2>{project.name}</h2>
      <h3>{project.category.name}</h3>
      <p>Orçamento: R${project.budget},00</p>
      <div className={styles.groupButtons}>
        <SecondaryButton to={path} text="Editar" icon={<MdEdit />} />
        <PrimaryButton
          action={handleDelete}
          text="Excluir"
          icon={<MdDeleteOutline />}
        />
      </div>
    </div>
  );
}

export default ProjectCard;
