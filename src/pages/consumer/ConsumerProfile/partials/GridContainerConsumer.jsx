import { Favoritos } from '../../Favoritos/Favoritos'
import { Pedidos } from '../../Pedidos/Pedidos'
import { Perfil } from '../../Perfil/Perfil'
import { ProximoPedido } from '../../ProximoPedido/ProximoPedido'

const GridContainerConsumer = ({ consumerDashboard, consumer, setConsumer }) => {
  const { pedidos, proximoPedido, perfil, favoritos } = consumerDashboard
  return (
    <aside className="asideContainer">
      {pedidos && <Pedidos {...{ consumer }} />}
      {proximoPedido && <ProximoPedido {...{ consumer, setConsumer }} />}
      {perfil && <Perfil {...{ consumer, setConsumer }} />}
      {favoritos && <Favoritos {...{ consumer, setConsumer }} />}
    </aside>
  )
}

export default GridContainerConsumer
