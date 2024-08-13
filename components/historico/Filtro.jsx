const Filtro = ({ itens, label }) => {
  const itensArray = itens ? Object.entries(itens) : [];

  return (
    <div className="w-100 pe-2">
      <select
        className="form-select"
        aria-label="Default select example"
        defaultValue="0"
      >
        <option key="0" value="0">
          {label}
        </option>
        {itensArray.map(([chave, valor]) => (
          <option key={valor} value={valor}>
            {chave}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filtro;
