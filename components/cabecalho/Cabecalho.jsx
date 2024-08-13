const Cabecalho = ({ titulo, subTitulo }) => {
  return (
    <div className="pt-4 w-100">
      <h1 className="m-0">{titulo}</h1>
      <p className="p-18 subtitulo">{subTitulo}</p>
    </div>
  );
};

export default Cabecalho;
