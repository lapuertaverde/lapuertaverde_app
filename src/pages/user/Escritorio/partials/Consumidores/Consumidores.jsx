import Grid from '../../../../../components/Grid/Grid'

import { memo, useRef } from 'react'
import { patchOnStopCellEditing } from '../../../../../utils/gridUtils'

const Consumidores = memo(({ consumers, setAlert }) => {
  const gridRef = useRef('')

  const columns = [
    {
      field: 'name',
      filter: true,
      flex: 2
    },
    { field: 'address', filter: true, flex: 2 },
    { field: 'CP', flex: 1 },
    { field: 'phone', flex: 1 },
    { field: 'email', flex: 2 },
    { field: 'dni', flex: 1 },
    {
      field: 'KgByDefault',
      flex: 1,

      type: 'number',
      cellStyle: ({ value }) => {
        const commonStyle = { display: 'flex', justifyContent: 'center' }

        if (value <= 5) return { color: 'green', backgroundColor: 'orange', ...commonStyle }

        return {
          color: 'white',
          backgroundColor: 'green',
          ...commonStyle
        }
      }
    },
    {
      field: 'active',
      cellDataType: 'boolean',
      flex: 1,

      cellStyle: () => ({
        display: 'flex',
        justifyContent: 'center',
        color: 'red'
      })
    },
    { field: 'favorites', flex: 1 },
    { field: 'discarded', flex: 1 }
  ]

  const handleCellEditingStopped = (e) =>
    patchOnStopCellEditing(
      e,
      ['name', 'address', 'phone', 'KgByDefault', 'email', 'CP', 'dni'],
      setAlert
    )

  return (
    <Grid
      {...{
        ref: gridRef,
        gridData: consumers,
        columns,
        handleCellEditingStopped
      }}
    />
  )
})

Consumidores.displayName = 'Consumidores'

export default Consumidores
