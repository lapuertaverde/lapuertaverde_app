import { useEffect, useRef } from 'react'
import Grid from '../../../components/Grid/Grid'

const GruposDeConsumo = ({ consumerGroup }) => {
  const ref = useRef(null)
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

  useEffect(() => {
    if (ref?.current) console.log(ref.current)
  }, [])

  return (
    consumerGroup && (
      <Grid
        gridData={consumerGroup.consumers}
        {...{ ref, columns, handleCellClick, handleCellEditingStopped }}
      />
    )
  )
}
export default GruposDeConsumo
