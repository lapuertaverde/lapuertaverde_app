import Grid from '../../../../../components/Grid/Grid'

const Facturas = ({ bills }) => {
  const columns = [
    { field: 'consumerName', filter: true },
    { field: 'billStatus', filter: true },
    { field: 'date' },
    { field: 'total' }
  ]

  const cellClickedListener = (event) => {
    console.log('cellClicked', event)
  }

  const cellEditingStopped = ({ data, oldValue, newValue, column: { colId } }) => {
    console.log(data)
  }

  return <Grid {...{ gridData: bills, columns, cellClickedListener, cellEditingStopped }} />
}

export default Facturas
