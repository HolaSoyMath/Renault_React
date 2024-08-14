const Status = ({status}) => {
  
  const classes = {
    Aberto: 'aberto',
    Andamento: 'andamento',
    Encerrado: 'encerrado',
    Solucionado: 'solucionado'
  }

  return (
    <span className={`status status-${classes[status]}`}>{status}</span>
  )
}

export default Status