import ProjectForm from "../components/form/ProjectForm";
import Container from "../components/layout/Container";

function NewProject() {
  return (
    <Container>
      <h1>Criar Projeto</h1>
      <h3>Crie um projeto para em seguida adicionar seus serviços.</h3>
      <ProjectForm btnText="Criar Projeto"/>
    </Container>
  );
}
export default NewProject;
