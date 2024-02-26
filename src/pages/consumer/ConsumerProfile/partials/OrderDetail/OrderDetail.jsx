import { RecordDetail } from '../../../../../components/RecordDetail/RecordDetail'
import { FlexLayout } from '../../../../../layouts/FlexLayout/FlexLayout'

export const OrderDetail = ({ orderDetail }) => {
  console.log(orderDetail)
  return (
    <>
      {orderDetail && (
        <FlexLayout flexDirection="column">
          <h3>Mi Pedido</h3>
          <RecordDetail {...{ orderDetail }} />
        </FlexLayout>
      )}
    </>
  )
}
