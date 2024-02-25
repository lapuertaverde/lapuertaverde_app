import ConsumersCard from '../ConsumerCard/ConsumersCard'
import { consumersFlatter } from '../../../../../utils/consumers'

import { header } from '../BorrarConsumidor/deleteConsumer.module.scss'
import Drawer from '../../../../../components/Drawer/Drawer'
import { useState } from 'react'

const EditConsumer = ({ consumerGroups }) => {
  const consumers = consumersFlatter(consumerGroups)

  const [open, setOpen] = useState(false)

  const onClose = () => setOpen(false)

  const onClick = (e) => setOpen(true)

  return (
    <div>
      <header className={header}>Editar Consumidor</header>
      <ConsumersCard {...{ consumers, onClick }} />
      <Drawer {...{ open, onClose }} width="740px">
        Formulario de Edicion
      </Drawer>
    </div>
  )
}

export default EditConsumer
