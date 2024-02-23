import Grid from '../../../../../components/Grid/Grid'

export const Pedidos = ({ consumerInfo }) => {
  const columns = [
    { field: 'date' },
    { field: 'deliveredKgs' },
    { field: 'totalEuros', filter: true },
    { field: 'priceKg' },
    { field: 'supplementsKgs' },
    { field: 'priceKgSuplements' }
  ]
  const handleCellClick = (event) => {
    console.log('cellClicked', event)
  }

  const handleCellEditingStopped = (event) => {
    console.log('cellEditingStopped', event)
  }

  console.log(consumerInfo)
  return (
    consumerInfo?.weeklyLog && (
      <Grid
        gridData={consumerInfo.weeklyLog}
        {...{ columns, handleCellClick, handleCellEditingStopped }}
      />
    )
  )
}
