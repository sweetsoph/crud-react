import ProjectForm from "../components/form/ProjectForm";
import Container from "../components/layout/Container";
import { useNavigate } from "react-router-dom";

function NewProject() {
  //useNavigate is a hook that allows us to redirect the user
  const history = useNavigate();

  //this function will be passed to the ProjectForm component as a prop, allowing the component to know if it is supposed to create or edit, as soon as the component is also used to edit a projectF
  function createProject(project) {
    //initialize cost and services
    project.cost = 0;
    project.services = [];

    //fetch calls the api in the backend to create a new project
    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        //content-type is a header that tells the server what kind of data we are sending
        "Content-Type": "application/json",
      },
      //the body of the request is the project object converted to a json string
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then(() =>
        //redirect to the projects page and sends a message to the user
        history("/projects", { message: "Projeto criado com sucesso!" })
      )
      .catch((err) => console.log(err));
  }

  return (
    <Container>
      <h1>Criar Projeto</h1>
      <h3>Crie um projeto para em seguida adicionar seus serviços.</h3>
      <ProjectForm handleSubmit={createProject} btnText="Criar Projeto" />
    </Container>
  );
}
export default NewProject;
