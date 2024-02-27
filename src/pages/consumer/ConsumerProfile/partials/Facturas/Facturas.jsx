import Grid from '../../../../../components/Grid/Grid'

export const Facturas = ({ consumerInfo }) => {
  const columns = [{ field: 'date' }, { field: 'total' }, { field: 'billStatus' }]
  const handleCellClick = (event) => {
    console.log('cellClicked', event)
  }

  const handleCellEditingStopped = (event) => {
    console.log('cellEditingStopped', event)
  }

  console.log(consumerInfo)
  return (
    consumerInfo?.bills && (
      <Grid
        gridData={consumerInfo.records}
        {...{ columns, handleCellClick, handleCellEditingStopped }}
      />
    )
  )
}
