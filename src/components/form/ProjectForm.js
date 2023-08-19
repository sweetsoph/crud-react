import { useEffect, useState } from "react";

import Input from "../layout/Input";
import Select from "../layout/Select";
import SubmitButton from "../layout/SubmitButton";

import styles from "./ProjectForm.module.css";
import Message from "../layout/Message";

function ProjectForm({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  //projects is either an empty object or the projectData object, it depends if the component is being used to create or edit a project
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch(() => (
        <Message type="error" text="Não foi possível carregar as categorias" />
      ));
  }, []);

  //function that will be called when the form is submitted, it can either create or edit a project, it depends if the father component is using the component to create or edit a project
  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  }

  //sets to the project object the value of the input that is being changed
  function handleChange(e){
    //it was supposed to get its name, not its id, but it was not working so im now getting its id, its working fine tho
    setProject({...project, [e.target.id]: e.target.value});
    //for example, if the user is changing the name input, the project object will be updated to {name: "the value of the input"}
  }

  //sets the category of the project object to the category that the user selected
  function handleCategory(e){
    setProject({...project, category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text
    }});
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        handleOnChange={handleChange}
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Digite o nome do projeto"
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Digite o valor do projeto"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />
      <Select
        name="category_id"
        text="Categoria do Projeto"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
