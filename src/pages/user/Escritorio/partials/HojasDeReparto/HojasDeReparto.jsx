import Grid from '../../../../../components/Grid/Grid'

const HojasDeReparto = ({ castSheets }) => {
  const columns = [{ field: 'consumerGroup' }, { field: 'date' }]
  //console.log(castSheets)
  const cellClickedListener = (event) => {
    console.log('cellClicked', event)
  }

  const cellEditingStopped = ({ data, oldValue, newValue, column: { colId } }) => {
    console.log(data)
  }

  return <Grid {...{ gridData: castSheets, columns, cellClickedListener, cellEditingStopped }} />
}

export default HojasDeReparto
