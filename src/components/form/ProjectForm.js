import Input from "../layout/Input";
import Select from "../layout/Select";
import SubmitButton from "../layout/SubmitButton";

import styles from "./ProjectForm.module.css";

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="projectName"
        placeholder="Digite o nome do projeto"
      />
      <Input
        type="number"
        text="Orçamento do Projeto"
        name="projectValue"
        placeholder="Digite o valor do projeto"
      />
      <Select
        name="category_id"
        text="Categoria do Projeto"
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
