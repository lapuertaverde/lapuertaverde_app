const DeleteConsumer = ({ consumers }) => {
  return (
    <div>
      <p>Borrar Consumidor</p>
      <p>{JSON.stringify(consumers)}</p>{' '}
    </div>
  )
}

export default DeleteConsumer
