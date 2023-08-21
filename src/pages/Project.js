import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProjectForm from "../components/form/ProjectForm";
import Container from "../components/layout/Container";
import SecondaryButton from "../components/layout/SecondaryButton";
import Loading from "../components/layout/Loading";
import ContainerRow from "../components/layout/ContainerRow";

import { MdCancel, MdEdit } from "react-icons/md";
import styles from "../components/layout/Card.module.css";
import Message from "../components/layout/Message";

function Project() {
  const { id } = useParams();
  const [project, setProject] = useState({});
  const [message, setMessage] = useState("");
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function toggleProjectForm() {
    setShowProjectForm(!showProjectForm);
  }

  function editProject(project) {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setMessage("Projeto editado com sucesso!");
      })
      .catch((err) => console.log(err));
    toggleProjectForm();
  }
  return (
    <Container>
      {project.name ? (
        <>
          <ContainerRow align={!showProjectForm && "start"}>
            <h1>{showProjectForm ? "Editar" : project.name.toUpperCase()}</h1>
            <SecondaryButton
              action={toggleProjectForm}
              text={showProjectForm ? "Cancelar" : "Editar"}
              icon={showProjectForm ? <MdCancel /> : <MdEdit />}
            />
          </ContainerRow>
          {message && <Message type="success" text={message}/>}
          {showProjectForm ? (
            <ProjectForm
              handleSubmit={editProject}
              btnText="Editar Projeto"
              projectData={project}
            />
          ) : (
            <>
              <ContainerRow align="start">
                <h3>Nome do Projeto:</h3>
                <p>{project.name}</p>
              </ContainerRow>
              <ContainerRow align="start">
                <h3>Categoria do Projeto:</h3>
                <p>{project.category.name}</p>
              </ContainerRow>
              <ContainerRow align="start">
                <h3>Orçamento:</h3>
                <p>R$ {project.budget},00</p>
              </ContainerRow>
              <ContainerRow align="start">
                <h3>Total Utilizado:</h3>
                <p>R$: {project.cost},00</p>
              </ContainerRow>
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default Project;
