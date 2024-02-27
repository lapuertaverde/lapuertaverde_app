import { RecordCard } from '../../../../../components/RecordCard/RecordCard'
import { FlexLayout } from '../../../../../layouts/FlexLayout/FlexLayout'

export const Pedidos = ({ consumerInfo, setOrderDetail, setConsumerDashboard }) => {
  return (
    <FlexLayout height="auto" flexDirection="column">
      <h2>TODOS LOS PEDIDOS</h2>
      {consumerInfo?.records?.length > 0 ? (
        consumerInfo.records.map((record) => (
          <RecordCard
            key={record._id}
            buttonText="Ver pedido"
            {...{ record, setOrderDetail, setConsumerDashboard }}
          />
        ))
      ) : (
        <p>"No hay pedidos que mostrar"</p>
      )}
    </FlexLayout>
  )
}
