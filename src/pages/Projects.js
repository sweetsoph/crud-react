import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Container from "../components/layout/Container";
import ContainerRow from "../components/layout/ContainerRow";
import ProjectCard from "../components/layout/ProjectCard";
import Message from "../components/layout/Message";
import PrimaryButton from "../components/layout/PrimaryButton";

import { MdAddCircleOutline } from "react-icons/md";
import Loading from "../components/layout/Loading";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setRemoveLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const location = useLocation();
  console.log(location.state);
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <Container>
      <ContainerRow align="start">
        <h1>Projetos</h1>
        <PrimaryButton
          to="/projects/newproject"
          text="Novo Projeto"
          icon={<MdAddCircleOutline />}
        />
      </ContainerRow>
      {message && <Message type="success" text={message} />}
      {removeLoading ? (
        <ContainerRow>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </ContainerRow>
      ) : (
        <Loading></Loading>
      )}
      {removeLoading && projects.length === 0 && (
        <h3>Nenhum Projeto Cadastrado.</h3>
      )}
    </Container>
  );
}

export default Projects;
