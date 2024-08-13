import Navbar from "../../components/navbar/Navbar";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Filtro from "../../components/historico/Filtro";
import InputPesquisaRisco from "../../components/historico/InputPesquisaRisco";
import ButtonPesquisaRisco from "../../components/historico/ButtonPesquisaRisco";
import Status from "../../components/historico/Status";
import ItemTabela from "../../components/historico/ItemTabela";

const AppHistorico = () => {
  const itens = { Kwid: 1, Sandero: 2, Kardian: 3 };

  const campos = {
    id: 1,
    risco: "Ausência de critério TCS ou presença de critério",
    veiculo: "Carro1",
    impacto: "K1",
    metier: "DEA-VA",
    status: "Aberto",
  };

  return (
    <div className="d-flex">
      <Navbar paginaAtual="historico" />
      <div className="px-4 m-0 w-100">
        <Cabecalho
          titulo="Riscos"
          subTitulo="Consulte seus riscos de forma rápida"
        />
        <div className="d-flex mb-4">
          <div className="d-flex me-3 container-filtro-select">
            <Filtro label="Veículo" itens={itens} />
            <Filtro label="Impacto" />
            <Filtro label="Metier" />
            <Filtro label="Jalón" />
            <Filtro label="Status" />
          </div>
          <div className="d-flex ms-3 container-filtro-input">
            <InputPesquisaRisco />
            <ButtonPesquisaRisco />
          </div>
        </div>
        {/* Tabela */}
        <div className="table-responsive">
          <table className="table align-middle table-hover">
            <thead className="table-light">
              <tr className="text-center">
                <th scope="col"></th>
                <th className="text-start" scope="col">
                  Risco
                </th>
                <th scope="col">Veículo</th>
                <th scope="col">Impacto</th>
                <th scope="col">Metier</th>
                <th scope="col">Status</th>
                <th className="d-none d-xl-table-cell" scope="col">
                  Acessar
                </th>
              </tr>
            </thead>
            <tbody>
              <ItemTabela campos={campos} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppHistorico;
