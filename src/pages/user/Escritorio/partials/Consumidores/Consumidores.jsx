import { patch } from '../../../../../services/APIServices'
import Grid from '../../../../../components/Grid/Grid'
import { toast } from 'react-toastify'
import { memo, useCallback, useRef } from 'react'

const Consumidores = memo(({ consumers, setAlert }) => {
  const gridRef = useRef('')

  const columns = [
    { field: 'name', filter: true },
    { field: 'address', filter: true },
    { field: 'CP' },
    { field: 'phone' },
    { field: 'email' },
    { field: 'dni' },
    {
      field: 'KgByDefault',
      type: 'number',
      cellStyle: ({ value }) => {
        if (value <= 5) return { color: 'white', backgroundColor: 'orange' }

        return { color: 'white', backgroundColor: 'green' }
      }
    },
    { field: 'active', cellDataType: 'boolean' },
    { field: 'favorites' },
    { field: 'discarded' }
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
