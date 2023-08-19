import PrimaryButton from "../components/layout/PrimaryButton";
import Container from "../components/layout/Container";
import Image from "../images/girl-coins.svg";
import { MdAddCircleOutline } from "react-icons/md";

function Home() {
  return (
    <Container>
      <h1>
        Bem vindo ao <span>Costs</span>
      </h1>
      <h3>Gerencie suas despesas de forma simples e rápida.</h3>
      <PrimaryButton
        to="/projects/newproject"
        text="Criar Projeto"
        icon={<MdAddCircleOutline />}
      />
      <img src={Image}></img>
    </Container>
  );
}

export default Home;
