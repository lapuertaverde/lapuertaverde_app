import Grid from '../../../../../components/Grid/Grid'

const RegistrosFinales = ({ finalRecords }) => {
  const gridData = finalRecords.map((finalRecord) => {
    const splittedDate = finalRecord.date.split('-')

    return {
      ...finalRecord,
      date: new Date(splittedDate[2], splittedDate[1], splittedDate[0])
    }
  })

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
