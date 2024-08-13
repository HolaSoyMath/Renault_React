const ItemNav = ({ nomeImg, label, active, colapsar }) => {
  const nomeImagem = `${nomeImg}` + `${active ? "-ativo" : ""}`;

  const classes = `nav-item d-flex align-items-center w-100 pb-3  ${
    colapsar ? "ps-4" : "justify-content-center"
  }`;

  return (
    <li className={classes}>
      <a className="nav-link" aria-current="page" href="#">
        <img src={`/images/navbar/${nomeImagem}.png`} alt={label} />
        {colapsar && (
          <span className={`titulo-nav ${active === true ? "active" : ""}`}>
            {label}
          </span>
        )}
      </a>
    </li>
  );
};

export default ItemNav;
