import Avatar from '../../../../../../components/Avatar/Avatar'
import Fieldset from '../../../../../../components/Fieldset/Fieldset'

import { cardContainer, card, field } from './consumerInfoCard.module.scss'

import Button from '../../../../../../components/Button/Button'
import Icon from '../../../../../../components/Icon/Icon'

const ConsumerInfoCard = ({ values, legend }) => {
  return (
    <Fieldset {...{ legend }} collapsible collapse={Boolean(values?.length)}>
      <div className={cardContainer}>
        {values?.length ? (
          values.map(({ name, priceKg, image, availability, priceKgSuplements }, index) => {
            return (
              <div className={card} key={name + index}>
                <div className={field}>Producto: {name.toUpperCase()}</div>
                <div className={field}>€/Kg: {priceKg}</div>
                <div className={field}>Suplemento €/Kg: {priceKgSuplements}</div>
                <div className={field}>€/Kg: {priceKg}</div>
                <div
                  className={field}
                  style={{ display: 'flex', alignItems: 'center', gap: '.2rem' }}
                >
                  Disponible:
                  <Icon
                    style={{ color: availability ? 'green' : 'red' }}
                    icon={availability ? 'thumbs-up' : 'xmark'}
                  />
                </div>

                <Avatar src={image} size="l" />
                <Button type="button" text="Eliminar de favoritos" />
              </div>
            )
          })
        ) : (
          <p>No hay información detallada para este campo</p>
        )}
      </div>
    </Fieldset>
  )
}

export default ConsumerInfoCard
