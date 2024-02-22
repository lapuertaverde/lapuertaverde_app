import { patch } from '../../../../../services/APIServices'
import Grid from '../../../../../components/Grid/Grid'

const Consumidores = ({ consumers }) => {
  const columns = [
    { field: 'name', filter: true },
    { field: 'address', filter: true },
    { field: 'CP' },
    { field: 'phone' },
    { field: 'email' },
    { field: 'dni' },
    { field: 'KgByDefault' },
    { field: 'active' },
    { field: 'favorites' },
    { field: 'discarded' }
  ]

  const cellClickedListener = (event) => {
    console.log('cellClicked', event)
  }

  const cellEditingStopped = ({ data, oldValue, newValue, column: { colId } }) => {
    const { _id } = data

    patch(`consumer/${_id}`, { [colId]: newValue })
      .then((res) => console.log('res', res))
      .catch((error) => console.log(error))
  }

  return <Grid {...{ gridData: consumers, columns, cellEditingStopped, cellClickedListener }} />
}
export default Consumidores
