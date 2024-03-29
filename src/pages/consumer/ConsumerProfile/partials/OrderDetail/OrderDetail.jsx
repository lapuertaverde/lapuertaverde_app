import { ProductCard } from '../../../../../components/ProductCard/ProductCard'
import { RecordCard } from '../../../../../components/RecordCard/RecordCard'
import { FlexLayout } from '../../../../../layouts/FlexLayout/FlexLayout'

import { orderDetailContainer } from './orderDetail.module.scss'

export const OrderDetail = ({ orderDetail, setConsumerDashboard, setUpdate, consumerInfo }) => {
  const handleClick = () => {
    console.log('entro')
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
    <>
      {orderDetail && (
        <FlexLayout flexDirection="column" height="auto">
          <h3>Mi Pedido</h3>
          <FlexLayout className={orderDetailContainer} flexDirection="column">
            <RecordCard
              record={orderDetail}
              buttonText="Pedir de nuevo"
              {...{ handleLike, handleClick }}
            />
            {orderDetail.products?.map((product) =>
              orderDetail.box.map((item) => {
                const key = `${item.id}${product._id}`
                return (
                  item.idProducts == product._id && (
                    <ProductCard key={key} columns="10% 45% 15% 10%" {...{ item, product }} />
                  )
                )
              })
            )}
          </FlexLayout>
        </FlexLayout>
      )}
    </>
  )
}
