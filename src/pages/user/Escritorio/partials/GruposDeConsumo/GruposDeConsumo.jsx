import { Fragment } from 'react'
import Grid from '../../../../../components/Grid/Grid'

const GruposDeConsumo = ({ consumerGroups }) => {
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
    consumerGroups?.length && (
      <div style={{ height: '200px' }}>
        {consumerGroups.map(({ consumers, name }) => (
          <Fragment key={name}>
            <p style={{ color: 'white', fontSize: '1.2rem' }}>{name.toUpperCase()}</p>
            <Grid
              gridData={consumers}
              {...{ columns, handleCellClick, handleCellEditingStopped }}
            />
          </Fragment>
        ))}
      </div>
    )
  )
}

export default GruposDeConsumo
