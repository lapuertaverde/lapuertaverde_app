import { FlexLayout } from '../../layouts/FlexLayout/FlexLayout'
import { GridLayout } from '../../layouts/GridLayout/GridLayout'
import { gridCustom } from './recordDetail.module.scss'

export const RecordDetail = ({ orderDetail }) => {
  return (
    <GridLayout classCustom={gridCustom}>
      <FlexLayout flexDirection="column">
        <FlexLayout flexDirection="column">
          <p>Número de pedido - {orderDetail.date}</p>
          <h4>{orderDetail._id}</h4>
        </FlexLayout>
        <FlexLayout flexDirection="column">
          <p>Kg totales</p>
          <h4>{orderDetail.deliveredKgs} Kg</h4>
        </FlexLayout>
        <FlexLayout flexDirection="column">
          <p>Importe total</p>
          <h4>{orderDetail.totalEuros} €</h4>
        </FlexLayout>
      </FlexLayout>
    </GridLayout>
  )
}
