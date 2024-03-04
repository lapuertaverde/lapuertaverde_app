import Avatar from '../../../../../../components/Avatar/Avatar'
import Fieldset from '../../../../../../components/Fieldset/Fieldset'

import { cardContainer, card, field } from './consumerInfoCard.module.scss'

import Button from '../../../../../../components/Button/Button'
import Icon from '../../../../../../components/Icon/Icon'

const ConsumerInfoCard = ({ values, legend, setValue, watch }) => {
  return (
    <Fieldset {...{ legend }} collapsible collapse={Boolean(values?.length)}>
      <div className={cardContainer}>
        {values?.length ? (
          values.map(({ name, priceKg, image, availability, priceKgSuplements }, index) => {
            return (
              <div className={card} key={name + index}>
                <div className={field}>Producto: {name?.toUpperCase()}</div>
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
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                  <Button
                    type="button"
                    text={`Eliminar de ${legend.toLowerCase()}`}
                    onClick={() => {
                      const fieldsetToSet = legend === 'FAVORITOS' ? 'favorites' : 'discarded'

                      setValue(
                        fieldsetToSet,
                        values.filter((value) => value.name !== name)
                      )
                    }}
                  />
                  <Button
                    type="button"
                    text={legend === 'FAVORITOS' ? 'Descartar' : 'Añadir a Favoritos'}
                    onClick={() => {
                      const fieldsetToSet = legend === 'FAVORITOS' ? 'favorites' : 'discarded'
                      const fieldsetToDelete = legend === 'FAVORITOS' ? 'discarded' : 'favorites'
                      setValue(
                        fieldsetToSet,
                        values.filter((value) => value.name !== name)
                      )
                      setValue(fieldsetToDelete, [
                        ...watch(fieldsetToDelete),
                        values.find((value) => value.name === name)
                      ])
                    }}
                  />
                </div>
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
