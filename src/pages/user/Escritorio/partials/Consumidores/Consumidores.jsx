import { patch } from '../../../../../services/APIServices'
import Grid from '../../../../../components/Grid/Grid'
import { toast } from 'react-toastify'

const Consumidores = ({ consumers }) => {
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

  const handleCellClick = (event) => {
    //console.log('cellClicked', event)
  }

  const handleCellEditingStopped = ({ data, oldValue, newValue, column: { colId } }) => {
    const { _id } = data

    patch(`consumer/${_id}`, { [colId]: newValue })
      .then(() => toast.success('Usuario actualizado correctamente!'))
      .catch((error) => console.log(error))
  }

  return (
    <Grid
      {...{
        gridData: consumers,
        columns,
        handleCellEditingStopped,
        handleCellClick
      }}
    />
  )
}
export default Consumidores
