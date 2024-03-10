import { cardContainer, card, field } from './consumerInfoCard.module.scss'

import Fieldset from '../../../../../../../components/Fieldset/Fieldset'
import Icon from '../../../../../../../components/Icon/Icon'
import Avatar from '../../../../../../../components/Avatar/Avatar'
import Button from '../../../../../../../components/Button/Button'

const ConsumerInfoCard = ({ values, legend, setValue, watch }) => {
  return (
    <Fieldset {...{ legend }} collapsible collapse={true}>
      <div className={cardContainer}>
        {values?.length ? (
          values.map(({ name, priceKg, image, availability, priceKgSuplements }, index) => (
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
                  text={
                    legend === 'PRODUCTOS'
                      ? 'Añadir a Descartados'
                      : `Eliminar de ${legend.toLowerCase()}`
                  }
                  onClick={() => {
                    const fieldsetToSet = legend === 'FAVORITOS' ? 'favorites' : 'discarded'

                    if (fieldsetToSet && legend !== 'PRODUCTOS') {
                      setValue(
                        fieldsetToSet,
                        values.filter((value) => value.name !== name)
                      )
                    } else {
                      if (watch('favorites').length) {
                        const isFavorite = watch('favorites').some(
                          (favorite) => favorite.name === name
                        )
                        if (isFavorite)
                          setValue(
                            'favorites',
                            watch('favorites').filter((favorite) => favorite.name !== name)
                          )
                      }
                      if (!watch('discarded').some((discard) => discard.name === name))
                        setValue('discarded', [
                          ...watch('discarded'),
                          values.find((value) => value.name === name)
                        ])
                    }
                  }}
                />
                <Button
                  type="button"
                  text={legend === 'FAVORITOS' ? 'Descartar' : 'Añadir a Favoritos'}
                  onClick={() => {
                    const fieldsetToSet = ['FAVORITOS', 'PRODUCTOS'].includes(legend)
                      ? 'favorites'
                      : 'discarded'
                    const fieldsetToDelete = ['FAVORITOS', 'PRODUCTOS'].includes(legend)
                      ? 'discarded'
                      : 'favorites'

                    if (legend !== 'PRODUCTOS') {
                      setValue(
                        fieldsetToSet,
                        values.filter((value) => value.name !== name)
                      )
                      setValue(fieldsetToDelete, [
                        ...watch(fieldsetToDelete),
                        values.find((value) => value.name === name)
                      ])
                    }

                    if (
                      legend === 'PRODUCTOS' &&
                      !watch('favorites').some((value) => value.name === name)
                    ) {
                      setValue('favorites', [
                        ...watch('favorites'),
                        values.find((value) => value.name === name)
                      ])
                      if (watch('discarded')?.length) {
                        const isDiscarded = watch('discarded').some(
                          (discard) => discard.name === name
                        )
                        if (isDiscarded)
                          setValue(
                            'discarded',
                            watch('discarded').filter((discard) => discard.name !== name)
                          )
                      }
                    }
                  }}
                />
              </div>
            </div>
          ))
        ) : (
          <p>No hay información detallada para este campo</p>
        )}
      </div>
    </Fieldset>
  )
}

export default ConsumerInfoCard
