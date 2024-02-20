import { Preferencias } from './Preferencias/Preferencias'
import { Pedidos } from './Pedidos/Pedidos'
import { Perfil } from './Perfil/Perfil'
import { ProximoPedido } from './ProximoPedido/ProximoPedido'

const GridContainerConsumer = ({ consumerDashboard, consumer, setConsumer }) => {
  const gridsContainer = {
    pedidos: <Pedidos {...{ consumer }} />,
    proximoPedido: <ProximoPedido {...{ consumer, setConsumer }} />,
    perfil: <Perfil {...{ consumer, setConsumer }} />,
    preferencias: <Preferencias {...{ consumer, setConsumer }} />
  }
  return <aside className="asideContainer">{gridsContainer[consumerDashboard]}</aside>
}

export default GridContainerConsumer
