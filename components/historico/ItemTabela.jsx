import Status from "./Status";

const ItemTabela = ({campos}) => {

  return (
    <tr className="text-center">
      <td className="col-2" scope="row">
        <img src={`/images/veiculos/${campos.veiculo}.png`} alt="" />
      </td>
      <td className="text-start col-4">{campos.risco}</td>
      <td>{campos.veiculo}</td>
      <td>{campos.impacto}</td>
      <td>{campos.metier}</td>
      <td>
        <Status status={campos.status} />
      </td>
      <td className="d-none d-xl-table-cell">
        <span className="acessar">&gt;</span>
      </td>
    </tr>
  );
};

export default ItemTabela;
