const DeleteConsumer = ({ consumers }) => {
  return (
    <div>
      <p>Borrar Consumidor BY ID</p>
      <p>{JSON.stringify(consumers)}</p>{' '}
    </div>
  )
}

export default DeleteConsumer
