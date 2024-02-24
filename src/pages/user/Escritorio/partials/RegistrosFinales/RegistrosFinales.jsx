import Grid from '../../../../../components/Grid/Grid'
import { parserDate } from '../../../../../utils/dateFormat'

const RegistrosFinales = ({ finalRecords }) => {
  const gridData = finalRecords?.map((record) => ({
    ...record,
    date: parserDate(record.date)
  }))

  const columns = [
    { field: 'supplementsKgs' },
    { field: 'deliveredKgs', filter: true },
    { filed: 'priceKgSuplements' },
    { field: 'priceKg', filter: true },
    {
      field: 'date',
      cellDataType: 'date',
      valueFormatter: ({ value }) => {
        if (value == null) {
          return 'JODER NULL NO ES UNA FECHA!'
        }

        const date = String(value.getDate())
        const month = String(value.getMonth() + 1)
        return `${date.length === 1 ? '0' + date : date}/${
          month.length === 1 ? '0' + month : month
        }/${value.getFullYear()}`
      }
    },
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
