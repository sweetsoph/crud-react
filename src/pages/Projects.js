import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Container from "../components/layout/Container";
import ContainerRow from "../components/layout/ContainerRow";
import ProjectCard from "../components/layout/ProjectCard";
import Message from "../components/layout/Message";

function Projects() {
  const [projects, setProjects] = useState([]);

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
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const location = useLocation();
  console.log(location.state);
  let message = '';
  if (location.state) {
    message = location.state.message;
  }

  return (
    <Container>
      <h1>Projetos</h1>
      {message && <Message type="success" text={message} />}
      <ContainerRow>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ContainerRow>
    </Container>
  );
}

export default Projects;
