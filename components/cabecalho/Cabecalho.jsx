const Cabecalho = ({ titulo, subTitulo }) => {
  return (
    <header id="header" className="pt-4 px-4 w-100">
      <h1 className="m-0">{titulo}</h1>
      <p className="p-18 subtitulo">{subTitulo}</p>
    </header>
  );
};

export default Cabecalho;
