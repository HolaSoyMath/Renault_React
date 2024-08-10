import React from "react";
import ItemNav from "./ItemNav";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      {/* Logo Renault */}
      <a className="navbar-brand d-flex justify-content-center w-100" href="#">
        <img src="/images/navbar/logo-renault-branco.png" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon">haha</span>
      </button>
      <div
        className="collapse navbar-collapse d-flex align-items-start w-100"
        id="navbarNav"
      >
        <ul className="navbar-nav flex-column mt-5 w-100">
          <ItemNav nomeImg="home" label="Início" />
          <ItemNav nomeImg="cadastro" label="Cadastro de risco" />
          <ItemNav nomeImg="historico" label="Histórico" />
          <ItemNav nomeImg="dashboard" label="Dashboard" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
