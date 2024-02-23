import { patch } from '../../../../../services/APIServices'
import Grid from '../../../../../components/Grid/Grid'
import { toast } from 'react-toastify'
import { useCallback, useRef } from 'react'

const Consumidores = ({ consumers, setAlert }) => {
  const gridRef = useRef('')

  const columns = [
    { field: 'name', filter: true },
    { field: 'address', filter: true },
    { field: 'CP' },
    { field: 'phone' },
    { field: 'email' },
    { field: 'dni' },
    { field: 'KgByDefault' },
    { field: 'active', cellDataType: 'boolean' },
    { field: 'favorites' },
    { field: 'discarded' }
  ]

  const handleCellEditingStopped = useCallback((e) => {
    console.log(e)

    const {
      node,
      data,
      oldValue,
      newValue,
      column: { colId }
    } = e
    const { _id } = data

    patch(`consumer/${_id}`, { [colId]: newValue })
      .then(() => toast.success('Usuario actualizado correctamente!'))
      .catch((error) =>
        setAlert({
          open: true,
          title: `Error actualizando el perfil consumidor de ${data.name} `,
          message: error.message,
          type: 'error'
        })
      )
    // console.log({ ...node.data, [colId]: oldValue })
    return gridRef.current.api.applyTransaction({
      update: [{ ...node.data, [colId]: oldValue }]
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
}
export default Consumidores
