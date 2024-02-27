import { toast } from 'react-toastify'
import { patch } from '../services/APIServices'

export const patchOnStopCellEditing = (
  e,
  mandatoryFields,
  setAlert,
  endpoint = 'consumer',
  toastMessage = 'Usuario actualizado correctamente!'
) => {
  const {
    node,
    data,
    oldValue,
    newValue,
    column: { colId }
  } = e
  const { _id } = data

  if ([null, undefined, ''].includes(newValue) && mandatoryFields.includes(colId)) {
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
      .then(() => toast.success(toastMessage))
      .catch((error) => {
        setAlert({
          open: true,
          title: `Error actualizando el perfil consumidor de ${data.name} `,
          message: error.message,
          type: 'error'
        })
      })
}
