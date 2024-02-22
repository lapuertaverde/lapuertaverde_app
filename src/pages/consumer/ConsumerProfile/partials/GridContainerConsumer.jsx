import { Favoritos } from './Favoritos/Favoritos'
import { Pedidos } from './Pedidos/Pedidos'
import { Perfil } from './Perfil/Perfil'
import { PedidoEnCurso } from './PedidoEnCurso/PedidoEnCurso'
import { NuevoPedido } from './NuevoPedido/NuevoPedido'
import { Descartados } from './Descartados/Descartados'
import { Facturas } from './Facturas/Facturas'

const GridContainerConsumer = ({ consumerDashboard, consumer, setConsumer }) => {
  const { dashboard } = consumerDashboard
  const gridsContainer = {
    pedidos: <Pedidos {...{ consumer }} />,
    facturas: <Facturas {...{ consumer }} />,
    nuevoPedido: <NuevoPedido {...{ consumer, setConsumer }} />,
    pedidoEnCurso: <PedidoEnCurso {...{ consumer, setConsumer }} />,
    perfil: <Perfil {...{ consumer, setConsumer }} />,
    favoritos: <Favoritos {...{ consumer, setConsumer }} />,
    descartados: <Descartados {...{ consumer, setConsumer }} />
  }
  return <aside className="asideContainer">{gridsContainer[dashboard]}</aside>
}

export default GridContainerConsumer
