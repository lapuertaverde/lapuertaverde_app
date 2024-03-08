import { toast } from 'react-toastify'
import { patch } from '../../../../../../../services/APIServices'

const getIdsArr = (arr) =>
  arr.length
    ? arr.map((item) => {
        if (typeof item === 'string') return item
        else return item._id
      })
    : []

export const handleSubmit = ({
  values,
  watchGroups,
  setAllConsumers,
  setConsumers,
  setAlert,
  allConsumers
}) =>
  patch(`consumer/${values._id}`, {
    ...values,
    favorites: getIdsArr(values.favorites),
    discarded: getIdsArr(values.discarded)
  })
    .then(() => {
      toast.success('Consumidor Actualizado', { position: 'top-left' })

      const consumersUpdated = allConsumers.map((consumer) => {
        if (consumer._id === values._id) return values
        else return consumer
      })

      setAllConsumers(consumersUpdated)
      setConsumers(
        consumersUpdated.filter(({ groupName }) =>
          watchGroups('groups') === 'Todos'
            ? groupName !== watchGroups('groups')
            : groupName === watchGroups('groups')
        )
      )
    })
    .catch((error) =>
      setAlert({
        open: true,
        type: 'error',
        title: `Error actualizando ${values.name}`,
        message: error.message
      })
    )
