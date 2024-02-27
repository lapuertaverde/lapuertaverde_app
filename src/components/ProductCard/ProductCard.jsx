import { FlexLayout } from '../../layouts/FlexLayout/FlexLayout'
import { GridLayout } from '../../layouts/GridLayout/GridLayout'
import { productCardContainer } from './productCard.module.scss'

export const ProductCard = ({ item, product, columns }) => {
  return (
    <GridLayout
      gridTemplateColumns={columns}
      width="90%"
      gap="2rem"
      classCustom={productCardContainer}
    >
      <img src={product.image} />
      <FlexLayout flexDirection="column">
        <h5>{product.name.toUpperCase()}</h5>
        <p>{product.description}</p>
      </FlexLayout>
      <FlexLayout flexDirection="column">
        <p>Precio: </p>
        <h5>{product.priceKg} €/Kg</h5>
        {item && (
          <>
            <p>Cantidad: </p>
            <h5>{item.kg} kg</h5>
          </>
        )}
      </FlexLayout>
      {item && (
        <FlexLayout flexDirection="column">
          <p>TOTAL: </p>
          <h3>{item.kg * product.priceKg} €</h3>
        </FlexLayout>
      )}
    </GridLayout>
  )
}
