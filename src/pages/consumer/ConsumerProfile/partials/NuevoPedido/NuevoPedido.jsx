import Button from '../../../../../components/Button/Button'
import { ProductCard } from '../../../../../components/ProductCard/ProductCard'
import { FlexLayout } from '../../../../../layouts/FlexLayout/FlexLayout'

import { newOrderContainer, newOrderHeader } from './nuevoPedido.module.scss'

export const NuevoPedido = ({ products, basket, setBasket }) => {
  return (
    <FlexLayout className={newOrderContainer} flexDirection="column" height="auto">
      <FlexLayout justifyContent="space-around" className={newOrderHeader} alignItems="center">
        <h2>Nuevo Pedido</h2>
        <Button text="Ver cesta" />
      </FlexLayout>
      {products &&
        products.map((product) => (
          <ProductCard
            key={product._id}
            {...{ product, basket, setBasket }}
            columns="15% 45% 15% 10%"
            all="true"
          />
        ))}
    </FlexLayout>
  )
}
