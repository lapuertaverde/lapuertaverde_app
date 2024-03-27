import { useEffect, useState } from 'react'
import Fieldset from '../../../../../../../components/Fieldset/Fieldset'
import ConsumerInfoCard from '../ConsumerInfoCard/ConsumerInfoCard'
import { get } from '../../../../../../../services/APIServices'
import Avatar from '../../../../../../../components/Avatar/Avatar'
import Icon from '../../../../../../../components/Icon/Icon'
import { Tooltip } from '../../../../../../../components/Tooltip/Tooltip'

const CardsContainer = ({ setValue, watch }) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    get('product')
      .then((res) => setProducts(res))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%',
        justifyContent: 'center'
      }}
    >
      <ConsumerInfoCard values={products} legend="PRODUCTOS" {...{ setValue, watch }} />

      <ConsumerInfoCard values={watch('discarded')} legend="DESCARTADOS" {...{ setValue, watch }} />

      <ConsumerInfoCard values={watch('favorites')} legend="FAVORITOS" {...{ setValue, watch }} />

      <Fieldset legend="PEDIDO EN CURSO" collapsible>
        {watch('orderInProgress')?.length > 0 && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            {watch('orderInProgress')?.map(
              ({ totalEuros, date, deliveredKgs, like, box, active }, index) => (
                <div
                  key={index}
                  style={{
                    width: '190px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    border: '1px solid white',
                    borderRadius: '8px',
                    backgroundColor: 'rgb(146, 108, 228)'
                  }}
                >
                  <p>Fecha : {date}</p>
                  <p>Precio Cesta: {totalEuros}</p>
                  <p>Kg en cesta: {deliveredKgs}</p>
                  <p style={{ display: 'flex', gap: '.61rem' }}>
                    Like:
                    <Icon
                      style={{ color: like ? 'green' : 'red' }}
                      icon={like ? 'thumbs-up' : 'xmark'}
                    />
                  </p>
                  <p style={{ display: 'flex', gap: '.61rem' }}>
                    En Reparto:
                    <Icon
                      style={{ color: active ? 'green' : 'red' }}
                      icon={active ? 'thumbs-up' : 'xmark'}
                    />
                  </p>
                  <p style={{ display: 'flex' }}>
                    {box?.length &&
                      box.map(({ name, image }, i) => (
                        <Tooltip text={name} key={name + i}>
                          <Avatar src={image} />
                        </Tooltip>
                      ))}
                  </p>
                </div>
              )
            )}
          </div>
        )}
      </Fieldset>
      <Fieldset legend="RECIBOS DEL CONSUMIDOR" collapsible>
        {watch('bills')?.length > 0 && (
          <div
            style={{
              border: '1px solid white',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem'
            }}
          >
            {watch('bills')?.map(({ name }, i) => (
              <div key={name + i}>
                <p>{name}</p>
              </div>
            ))}
          </div>
        )}
      </Fieldset>
    </div>
  )
}

export default CardsContainer
