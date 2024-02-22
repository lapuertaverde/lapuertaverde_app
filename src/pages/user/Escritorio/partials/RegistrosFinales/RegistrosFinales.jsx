import Grid from '../../../../../components/Grid/Grid'

const RegistrosFinales = ({ finalRecords }) => {
  const columns = [
    { field: 'supplementsKgs' },
    { field: 'deliveredKgs', filter: true },
    { filed: 'priceKgSuplements' },
    { field: 'priceKg', filter: true },
    { field: 'date' },
    { field: 'totalEuros' }
  ]

  const cellClickedListener = (event) => {
    console.log('cellClicked', event)
  }

  const cellEditingStopped = ({ data, oldValue, newValue, column: { colId } }) => {
    console.log(data)
  }

  return <Grid {...{ gridData: finalRecords, columns, cellClickedListener, cellEditingStopped }} />
}

export default RegistrosFinales
