const ItemNav = ({ nomeImg, label }) => {
  return (
    <li className="nav-item d-flex align-items-center pb-3 w-100">
      <a className="nav-link active" aria-current="page" href="#">
        <img src={`/images/navbar/${nomeImg}.png`} alt={label} />
        <span className="p-18">{label}</span>
      </a>
    </li>
  );
};

export default ItemNav;
