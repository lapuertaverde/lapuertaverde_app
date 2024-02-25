import { toast } from 'react-toastify'
import { patch } from '../services/APIServices'

export const patchOnStopCellEditing = (e, mandatoryFields, setAlert, endpoint = 'consumer') => {
  const {
    node,
    data,
    oldValue,
    newValue,
    column: { colId }
  } = e
  const { _id } = data

  if (!newValue && mandatoryFields.includes(colId)) {
    setAlert({
      open: true,
      title: 'CAMPO OBLIGATORIO',
      message: `El campo ${colId} es obligatorio `,
      type: 'error'
    })
    return node.setData({ ...data, [colId]: oldValue })
  }
  if (oldValue !== newValue)
    patch(`${endpoint}/${_id}`, { [colId]: newValue })
      .then(() => toast.success('Usuario actualizado correctamente!'))
      .catch((error) => {
        setAlert({
          open: true,
          title: `Error actualizando el perfil consumidor de ${data.name} `,
          message: error.message,
          type: 'error'
        })
      })
}