import PrimaryButton from "../components/layout/PrimaryButton";

function Home() {
    return (
        <div>
            <h1>Bem vindo ao <span>Costs</span></h1>
            <p>Gerencie suas despesas de forma simples e rápida.</p>
            <PrimaryButton to="/newproject" text="Criar Projeto" />
        </div>
    );
}

export default Home;