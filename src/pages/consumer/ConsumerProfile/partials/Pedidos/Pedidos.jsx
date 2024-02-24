import { RecordCard } from '../../../../../components/RecordCard/RecordCard'
import { FlexLayout } from '../../../../../layouts/FlexLayout/FlexLayout'

export const Pedidos = ({ consumerInfo }) => {
  return (
    <FlexLayout height="auto" flexDirection="column">
      <h2>TODOS LOS PEDIDOS</h2>
      {consumerInfo.weeklyLog.length > 0 ? (
        consumerInfo.weeklyLog.map((record) => <RecordCard {...{ record }} />)
      ) : (
        <p>"No hay pedidos que mostrar"</p>
      )}
    </FlexLayout>
  )
}
