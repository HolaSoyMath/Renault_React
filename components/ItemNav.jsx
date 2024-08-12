const ItemNav = ({ nomeImg, label, active, colapsar }) => {
  
  const nomeImagem = `${nomeImg}` + `${active ? "-ativo" : ""}`;

  return (
    <li className="nav-item d-flex align-items-center pb-3 w-100">
      <a className={`nav-link`} aria-current="page" href="#">
        <img src={`/images/navbar/${nomeImagem}.png`} alt={label} />
        {!colapsar && <span className={`titulo-nav ${active === true ? "active" : ""}`}>
          {label}
        </span>}
      </a>
    </li>
  );
};

export default ItemNav;
