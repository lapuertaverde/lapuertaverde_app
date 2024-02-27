import { RecordCard } from '../../../../../components/RecordCard/RecordCard'
import { FlexLayout } from '../../../../../layouts/FlexLayout/FlexLayout'

export const Pedidos = ({ consumerInfo, setOrderDetail, setConsumerDashboard, setUpdate }) => {
  const handleClick = (record) => {
    setOrderDetail(() => record)
    setConsumerDashboard((pre) => ({ ...pre, dashboard: 'orderDetail' }))
  }

  const handleLike = (id) => {
    setUpdate((pre) => !pre)
    setConsumerDashboard((pre) => ({
      ...pre,
      endpoint: `consumer/recordLike/${consumerInfo._id}`,
      method: 'patch',
      values: {
        idRecord: id
      }
    }))
  }
  return (
    <FlexLayout height="auto" flexDirection="column">
      <h2>TODOS LOS PEDIDOS</h2>
      {consumerInfo?.records?.length > 0 ? (
        consumerInfo.records.map((record) => (
          <RecordCard
            key={record._id}
            buttonText="Ver pedido"
            {...{ record, setOrderDetail, handleLike, handleClick }}
          />
        ))
      ) : (
        <p>"No hay pedidos que mostrar"</p>
      )}
    </FlexLayout>
  )
}
