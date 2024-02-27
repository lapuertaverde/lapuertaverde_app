import { ProductCard } from '../../../../../components/ProductCard/ProductCard'
import { RecordCard } from '../../../../../components/RecordCard/RecordCard'
import { FlexLayout } from '../../../../../layouts/FlexLayout/FlexLayout'
import { orderDetailContainer } from './orderDetail.module.scss'

export const OrderDetail = ({ orderDetail }) => {
  console.log(orderDetail)
  return (
    <>
      {orderDetail && (
        <FlexLayout flexDirection="column" height="auto">
          <h3>Mi Pedido</h3>
          <FlexLayout className={orderDetailContainer} flexDirection="column">
            <RecordCard record={orderDetail} buttonText="Pedir de nuevo" />
            {orderDetail.products.map((product) =>
              orderDetail.box.map(
                (item) =>
                  item.idProducts == product._id && (
                    <ProductCard
                      key={`${item.id}${product._id}`}
                      columns="10% auto 15% 10%"
                      {...{ item, product }}
                    />
                  )
              )
            )}
          </FlexLayout>
        </FlexLayout>
      )}
    </>
  )
}
