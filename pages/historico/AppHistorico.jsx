import Navbar from "../../components/navbar/Navbar";
import Cabecalho from "../../components/cabecalho/Cabecalho";
import Filtro from "../../components/historico/Filtro";
import InputPesquisaRisco from "../../components/historico/InputPesquisaRisco";
import ButtonPesquisaRisco from "../../components/historico/ButtonPesquisaRisco";
import ItemTabela from "../../components/historico/ItemTabela";
import ButtonPage from "../../components/historico/ButtonPage";

const AppHistorico = () => {
  const itens = { Kwid: 1, Sandero: 2, Kardian: 3 };

  const campos = [
    {
      id: 1,
      risco: "Ausência de critério TCS ou presença de critério",
      veiculo: "Carro1",
      impacto: "K1",
      metier: "DEA-VA",
      status: "Aberto",
    },
    {
      id: 2,
      risco: "Presença de critério TCS sem validade",
      veiculo: "Carro2",
      impacto: "K2",
      metier: "DEA-VB",
      status: "Andamento",
    },
    {
      id: 3,
      risco: "Presença de critério TCS sem validade",
      veiculo: "Carro3",
      impacto: "K3",
      metier: "DEA-VC",
      status: "Solucionado",
    },
  ];

  return (
    <div className="d-flex h-100">
      {/* Navbar */}
      <Navbar paginaAtual="historico" />
      <div className="flex-column w-100 h-100">
        {/* Cabeçalho */}
        <Cabecalho
          titulo="Riscos"
          subTitulo="Consulte seus riscos de forma rápida"
        />
        {/* Conteúdo principal */}
        <main className="px-4 m-0 w-100">
          {/* Filtros */}
          <div id="filtro" className="d-flex mb-4">
            <div className="d-flex me-3 container-filtro-select">
              <Filtro label="Veículo" itens={itens} />
              <Filtro label="Impacto" />
              <Filtro label="Metier" />
              <Filtro label="Jalón" />
              <Filtro label="Status" />
            </div>
            {/* Botão pesquisa */}
            <div className="d-flex ms-3 container-filtro-input">
              <InputPesquisaRisco />
              <ButtonPesquisaRisco />
            </div>
          </div>
          {/* Tabela */}
          <div id="container-table" className="w-100">
            <div className="table-responsive h-100">
              <table className="table align-middle table-hover">
                {/* Cabeçalho Tabela */}
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
                {/* Itens Tabela */}
                <tbody>
                  {campos.map((campo) => {
                    return <ItemTabela campos={campo} />;
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        {/* Rodapé */}
        <footer
          id="footerHistorico"
          className="w-100 px-4 pt-3"
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <button id="download" type="button" className="btn btn-outline-warning">
                  Baixar relatório
                </button>
              </div>
              <div className="col text-end">
                <ButtonPage />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AppHistorico;
