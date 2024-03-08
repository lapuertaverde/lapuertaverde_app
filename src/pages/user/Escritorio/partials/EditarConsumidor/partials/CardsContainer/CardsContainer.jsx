import Fieldset from '../../../../../../../components/Fieldset/Fieldset'
import ConsumerInfoCard from '../ConsumerInfoCard/ConsumerInfoCard'

const CardsContainer = ({ setValue, watch }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '100%',
      justifyContent: 'center'
    }}
  >
    <ConsumerInfoCard values={watch('discarded')} legend="DESCARTADOS" {...{ setValue, watch }} />

    <ConsumerInfoCard values={watch('favorites')} legend="FAVORITOS" {...{ setValue, watch }} />

    <Fieldset legend="PEDIDO EN CURSO" collapsible>
      {watch('orderInProgress')?.length > 0 && (
        <div
          style={{
            border: '1px solid white',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem'
          }}
        >
          {watch('orderInProgress')?.map(({ name }, index) => (
            <div key={name + index}>
              <p>{name}</p>
            </div>
          ))}
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
          {watch('bills')?.map(({ name }) => (
            <div key={name}>
              <p>{name}</p>
            </div>
          ))}
        </div>
      )}
    </Fieldset>
  </div>
)

export default CardsContainer
