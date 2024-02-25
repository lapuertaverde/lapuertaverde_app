import { consumersFlatter } from '../../../../../utils/consumers'
import ConsumersCard from '../ConsumerCard/ConsumersCard'
import Button from '../../../../../components/Button/Button'

import { deleteService } from '../../../../../services/APIServices'

import { header, alertFooter } from './deleteConsumer.module.scss'
import { useState } from 'react'

const DeleteConsumer = ({ consumerGroups, setAlert }) => {
  const [consumers, setConsumers] = useState(consumersFlatter(consumerGroups))

  const closeAlert = { open: false, footer: null }

  const handleDelete = (name, id) => {
    deleteService(`consumer/${id}`)
      .then(() => {
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

  const onClick = ({ name, _id }) => {
    setAlert({
      title: `Borrar a ${name} !!`,
      type: 'warn',
      message: `¿ Estás segur@ de borrar a ${name} ?`,
      open: true,
      footer: (
        <div className={alertFooter}>
          <Button type="button" text="Cancelar" onClick={() => setAlert(closeAlert)} />
          <Button type="button" text="Borrar" onClick={() => handleDelete(name, _id)} />
        </div>
      )
    })
  }
  return (
    <div>
      <header className={header}>Borrar Consumidor</header>
      <ConsumersCard {...{ consumers, onClick }} />
    </div>
  )
}

export default DeleteConsumer
