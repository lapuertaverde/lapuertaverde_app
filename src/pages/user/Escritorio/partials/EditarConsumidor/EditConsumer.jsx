import ConsumersCard from '../ConsumerCard/ConsumersCard'
import { consumersFlatter } from '../../../../../utils/consumers'

import { header } from '../BorrarConsumidor/deleteConsumer.module.scss'

const EditConsumer = ({ consumerGroups }) => {
  const consumers = consumersFlatter(consumerGroups)

  const onClick = (e) => console.log('EDITAR', e)

  return (
    <div>
      <header className={header}>Editar Consumidor</header>
      <ConsumersCard {...{ consumers, onClick }} />
    </div>
  )
}

export default EditConsumer
