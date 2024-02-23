import Grid from '../../../../../components/Grid/Grid'
import { parserDate } from '../../../../../utils/dateFormat'

const RegistrosFinales = ({ finalRecords }) => {
  console.log(finalRecords)

  const gridData = finalRecords
    ? finalRecords?.map((record) => ({
        ...record,
        date: parserDate(record.date)
      }))
    : []

  const columns = [
    { field: 'supplementsKgs' },
    { field: 'deliveredKgs', filter: true },
    { filed: 'priceKgSuplements' },
    { field: 'priceKg', filter: true },
    { field: 'date', cellDataType: 'date' },
    { field: 'totalEuros' }
  ]

  const cellClickedListener = (event) => {
    // console.log('cellClicked', event)
  }

  const cellEditingStopped = ({ data, oldValue, newValue, column: { colId } }) => {
    console.log(data)
  }

  return <Grid {...{ gridData, columns, cellClickedListener, cellEditingStopped }} />
}

export default RegistrosFinales
