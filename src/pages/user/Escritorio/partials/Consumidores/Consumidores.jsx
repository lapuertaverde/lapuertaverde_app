import { patch } from '../../../../../services/APIServices'
import Grid from '../../../../../components/Grid/Grid'
import { toast } from 'react-toastify'

const Consumidores = ({ consumers, setAlert }) => {
  const columns = [
    { field: 'name', filter: true },
    { field: 'address', filter: true },
    { field: 'CP' },
    { field: 'phone' },
    { field: 'email' },
    { field: 'dni' },
    { field: 'KgByDefault' },
    { field: 'active', cellDataType: 'boolean' },
    { field: 'favorites' },
    { field: 'discarded' }
  ]

  const handleCellEditingStopped = ({ data, oldValue, newValue, column: { colId } }) => {
    const { _id } = data

    patch(`consumer/${_id}`, { [colId]: newValue })
      .then(() => toast.success('Usuario actualizado correctamente!'))
      .catch((error) =>
        setAlert({
          open: true,
          title: `Error actualizando el perfil consumidor de ${data.name} `,
          message: error.message,
          type: 'error'
        })
      )
  }

  return (
    <Grid
      {...{
        gridData: consumers,
        columns,
        handleCellEditingStopped
      }}
    />
  )
}
export default Consumidores
