import { patch } from '../../../../../services/APIServices'
import Grid from '../../../../../components/Grid/Grid'
import { toast } from 'react-toastify'
import { memo, useCallback, useRef } from 'react'

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

  const handleCellEditingStopped = useCallback((e) => {
    const {
      node,
      data,
      oldValue,
      newValue,
      column: { colId }
    } = e
    const { _id } = data

    if (!newValue && ['name', 'address', 'CP', 'email', 'KgByDefault'].includes(colId)) {
      setAlert({
        open: true,
        title: 'CAMPO OBLIGATORIO',
        message: `El campo ${colId} es obligatorio `,
        type: 'error'
      })
      return node.setData({ ...data, [colId]: oldValue })
    }
    if (oldValue !== newValue)
      patch(`consumer/${_id}`, { [colId]: newValue })
        .then(() => toast.success('Usuario actualizado correctamente!'))
        .catch((error) => {
          setAlert({
            open: true,
            title: `Error actualizando el perfil consumidor de ${data.name} `,
            message: error.message,
            type: 'error'
          })
        })
  })

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
