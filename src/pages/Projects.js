import { useState, useEffect } from "react";

import Container from "../components/layout/Container";
import ContainerRow from "../components/layout/ContainerRow";
import ProjectCard from "../components/layout/ProjectCard";

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
  return (
    <Container>
      <h1>Projetos</h1>
      <ContainerRow>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </ContainerRow>
    </Container>
  );
}

export default Projects;
