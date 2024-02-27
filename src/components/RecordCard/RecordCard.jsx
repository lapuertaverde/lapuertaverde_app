import { FlexLayout } from '../../layouts/FlexLayout/FlexLayout'
import { GridLayout } from '../../layouts/GridLayout/GridLayout'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import { Tooltip } from '../Tooltip/Tooltip'

import { pOrderCard, h4OrderCard, resault, gridCustom } from './recordCard.module.scss'

export const RecordCard = ({ record, handleClick, buttonText }) => {
  return (
    <GridLayout
      height="230px"
      gridTemplateColumns="45% 20% 20%"
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
      <FlexLayout alignItems="center" flexDirection="column" gap="1.5rem">
        <Button text={buttonText} onClick={() => handleClick(record)} />
        <Tooltip text="Click para ver factura">
          <Icon icon="file-invoice" />
        </Tooltip>
      </FlexLayout>
    </GridLayout>
  )
}
