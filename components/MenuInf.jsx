import ItemNav from "./ItemNav";

const MenuInf = ({ colapsar }) => {
  return (
    <div className="d-flex align-items-end w-100 h-100">
      <ul className="navbar-nav flex-column mb-4 w-100">
        <ItemNav nomeImg="ajuda" label="Ajuda" colapsar={colapsar} />
        <ItemNav nomeImg="sair" label="Sair" colapsar={colapsar} />
      </ul>
    </div>
  );
};

export default MenuInf;
