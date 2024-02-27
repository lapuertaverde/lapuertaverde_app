import Grid from '../../../../../components/Grid/Grid'
import { patchOnStopCellEditing } from '../../../../../utils/gridUtils'

const GrupoDeConsumo = ({ consumerGroup, setAlert }) => {
  const columns = [
    { field: 'name', filter: true, rowDrag: true },
    { field: 'address', filter: true },
    { field: 'phone' },
    { field: 'monthOrder', type: ['dateColumn'] }
  ]

  const handleCellEditingStopped = (e) =>
    patchOnStopCellEditing(e, ['name', 'phone', 'address'], setAlert)

  return (
    consumerGroup && (
      <Grid gridData={consumerGroup.consumers} {...{ columns, handleCellEditingStopped }} />
    )
  )
}
export default GrupoDeConsumo
