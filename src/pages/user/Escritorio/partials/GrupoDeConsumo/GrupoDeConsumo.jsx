import Grid from '../../../../../components/Grid/Grid'

const GrupoDeConsumo = ({ consumerGroup }) => {
  const columns = [
    { field: 'name', filter: true, rowDrag: true },
    { field: 'address', filter: true },
    { field: 'phone' },
    { field: 'monthOrder', type: ['dateColumn'] }
  ]

  const handleCellClick = (event) => {
    console.log('cellClicked', event)
  }

  const handleCellEditingStopped = (event) => {
    console.log('cellEditingStopped', event)
  }

  return (
    consumerGroup && (
      <Grid
        gridData={consumerGroup.consumers}
        {...{ columns, handleCellClick, handleCellEditingStopped }}
      />
    )
  )
}
export default GrupoDeConsumo
