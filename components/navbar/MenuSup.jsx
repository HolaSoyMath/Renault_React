import ItemNav from "./ItemNav";

const MenuSup = ({ paginaAtual, colapsar }) => {
  return (
    <div className="d-flex align-items-start w-100 h-100">
      <ul className="navbar-nav flex-column mt-5 w-100 p-0">
        <ItemNav
          nomeImg="home"
          label="Início"
          active={paginaAtual === "home" ? true : false}
          colapsar={colapsar}
        />
        <ItemNav
          nomeImg="cadastro"
          label="Cadastro de risco"
          active={paginaAtual === "cadastro" ? true : false}
          colapsar={colapsar}
        />
        <ItemNav
          nomeImg="historico"
          label="Histórico"
          active={paginaAtual === "historico" ? true : false}
          colapsar={colapsar}
        />
        <ItemNav
          nomeImg="dashboard"
          label="Dashboard"
          active={paginaAtual === "dashboard" ? true : false}
          colapsar={colapsar}
        />
      </ul>
    </div>
  );
};

export default MenuSup;
