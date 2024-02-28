import { FlexLayout } from '../../layouts/FlexLayout/FlexLayout'
import { GridLayout } from '../../layouts/GridLayout/GridLayout'
import InputNumber from '../InputNumber/InputNumber'
import Button from '../Button/Button'
import Form from '../Form/Form'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

import { productCardContainer, formContainer } from './productCard.module.scss'

export const ProductCard = ({ item, product, columns, all, basket, setBasket }) => {
  const [disabled, setDisabled] = useState(false)
  const kg = basket ? basket.find((item) => item.idProducts === product._id)?.kg || 0 : 0
  const defaultValues = {
    kg
  }

  const methods = useForm({
    defaultValues,
    mode: 'onChange'
  })

  const { reset } = methods

  const onSubmit = (values) => {
    setDisabled(true)
    if (basket) {
      const index = basket.findIndex((item) => item.idProducts === product._id)
      if (index !== -1) {
        const updatedBasket = [...basket]
        updatedBasket[index] = { kg: values.kg, idProducts: product._id, product }
        setBasket(updatedBasket)
        sessionStorage.setItem('basket', JSON.stringify(updatedBasket))
        setDisabled(false)
      } else {
        const updatedBasket = [...basket]
        setBasket((pre) => [...pre, { kg: values.kg, idProducts: product._id, product }])
        sessionStorage.setItem(
          'basket',
          JSON.stringify([...updatedBasket, { kg: values.kg, idProducts: product._id, product }])
        )
        setDisabled(false)
      }
    } else {
      setBasket([{ kg: values.kg, idProducts: product._id, product }])
      sessionStorage.setItem(
        'basket',
        JSON.stringify([{ kg: values.kg, idProducts: product._id, product }])
      )
      setDisabled(false)
    }
  }

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
        {basket && all && (
          <>
            <p>Total: </p>
            {basket.map(
              (item) =>
                item.idProducts == product._id && (
                  <h5 key={`${product._id}${item.kg}`}>{item.kg * product.priceKg} €</h5>
                )
            )}
          </>
        )}
      </FlexLayout>
      {item && (
        <FlexLayout flexDirection="column">
          <p>TOTAL: </p>
          <h3>{item.kg * product.priceKg} €</h3>
        </FlexLayout>
      )}
      {all && (
        <FlexLayout flexDirection="column">
          <Form id={product._id} {...{ methods, onSubmit }} className={formContainer}>
            <InputNumber name="kg" placeholder="Kgs" min={1} required width="30px" />
          </Form>
          <Button text="" icon="basket-shopping" form={product._id} {...{ disabled }}></Button>
        </FlexLayout>
      )}
    </GridLayout>
  )
}
