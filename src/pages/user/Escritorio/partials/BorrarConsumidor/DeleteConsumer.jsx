import { consumersFlatter } from '../../../../../utils/consumers'
import ConsumersCard from '../ConsumerCard/ConsumersCard'
import Button from '../../../../../components/Button/Button'

import { deleteService } from '../../../../../services/APIServices'

import { header, alertFooter } from './deleteConsumer.module.scss'
import { useState } from 'react'

const DeleteConsumer = ({ consumerGroups, setAlert, setConsumerGroups }) => {
  const [consumers, setConsumers] = useState(consumersFlatter(consumerGroups))
  const [id, setId] = useState(null)

  const footerButton = {
    backgroundColor: 'rgb(159, 118, 246)',
    color: 'white',
    border: '1px solid white'
  }

  const closeAlert = { open: false, footer: null }

  const handleDelete = (name, id, groupName) => {
    deleteService(`consumer/${id}`)
      .then(() => {
        setConsumerGroups(
          consumerGroups.map((group) => {
            if (group.name === groupName)
              return {
                ...group,
                consumers: consumers.filter(
                  ({ _id: idConsumer, groupName }) => idConsumer !== id && groupName === group.name
                )
              }
            else return group
          })
        )

        setConsumers(consumers.filter(({ _id: idConsumer }) => idConsumer !== id))

        setAlert(closeAlert)
      })
      .catch((error) =>
        setAlert({
          title: `Error deleting ${name}`,
          type: 'error',
          message: error.message,
          open: true,
          footer: null
        })
      )
  }

  const onClick = ({ name, _id, groupName }) => {
    setId(_id)
    setAlert({
      title: `Borrar a ${name} !!`,
      type: 'warn',
      message: `¿ Estás segur@ de borrar a ${name} ?`,
      open: true,
      onClose: () => setId(null),
      footer: (
        <div className={alertFooter}>
          <Button
            type="button"
            text="Cancelar"
            onClick={() => {
              setId(null)
              setAlert(closeAlert)
            }}
            style={footerButton}
          />
          <Button
            type="button"
            text="Borrar"
            onClick={() => handleDelete(name, _id, groupName)}
            style={footerButton}
          />
        </div>
      )
    })
  }
  return (
    <div>
      <header className={header}>Borrar Consumidor</header>
      <ConsumersCard {...{ consumers, onClick, id }} />
    </div>
  )
}

export default DeleteConsumer
