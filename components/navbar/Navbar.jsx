import MenuInf from "./MenuInf";
import MenuSup from "./MenuSup";

const Navbar = ({ paginaAtual }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="navbar-not-collapse h-100 w-100 flex-column pt-3">
        <a
          className="navbar-brand d-flex justify-content-center w-100"
          href="#"
        >
          <img src="/images/navbar/logo-renault-branco.png" alt="" />
        </a>
        {/* Menus superiores Extendidos */}
        <MenuSup paginaAtual={paginaAtual} colapsar={false} />
        {/* Menus inferiores Extendidos*/}
        <MenuInf colapsar={false} />
      </div>

      {/* Menu Extendido */}
      <div className="navbar-collapse h-100 w-100 flex-column pt-3">
        <a
          className="navbar-brand d-flex justify-content-center w-100"
          href="#"
        >
          <img src="/images/navbar/logo-renault-nome-branco.png" alt="" />
        </a>
        {/* Menus superiores Extendidos */}
        <MenuSup paginaAtual={paginaAtual} colapsar={true} />
        {/* Menus inferiores Extendidos*/}
        <MenuInf colapsar={true} />
      </div>
    </nav>
  );
};

export default Navbar;
