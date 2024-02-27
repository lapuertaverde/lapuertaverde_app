import { FlexLayout } from '../../layouts/FlexLayout/FlexLayout'
import { GridLayout } from '../../layouts/GridLayout/GridLayout'
import Button from '../Button/Button'

import { pOrderCard, h4OrderCard, resault, gridCustom } from './recordCard.module.scss'

export const RecordCard = ({ record, setOrderDetail, setConsumerDashboard, buttonText }) => {
  const handleClick = (record) => {
    console.log('click', record)
    setOrderDetail(() => record)
    setConsumerDashboard((pre) => ({ ...pre, dashboard: 'orderDetail' }))
  }

  return (
    <GridLayout
      height="230px"
      gridTemplateColumns="300px 200px 200px"
      gridTemplateRows="150px"
      width="90%"
      classCustom={gridCustom}
    >
      <FlexLayout flexDirection="column">
        <FlexLayout flexDirection="column">
          <p className={pOrderCard}>Número de pedido:</p>
          <h4 className={`${h4OrderCard} ${resault}`}>{record._id}</h4>
        </FlexLayout>
        <FlexLayout flexDirection="column">
          <p className={pOrderCard}>Fecha del pedido:</p>
          <h4 className={h4OrderCard}>{record.date}</h4>
        </FlexLayout>
      </FlexLayout>
      <FlexLayout flexDirection="column">
        <FlexLayout flexDirection="column">
          <p className={pOrderCard}>Kg entregados:</p>
          <h4 className={h4OrderCard}>{`${record.deliveredKgs} Kg`}</h4>
        </FlexLayout>
        <FlexLayout flexDirection="column">
          <p className={pOrderCard}>Total:</p>
          <h4 className={h4OrderCard}>{`${record.totalEuros} €`}</h4>
        </FlexLayout>
      </FlexLayout>
      <FlexLayout alignItems="center">
        <Button text={buttonText} onClick={() => handleClick(record)} />
      </FlexLayout>
    </GridLayout>
  )
}
