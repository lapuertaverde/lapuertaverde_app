import { Favoritos } from './Favoritos/Favoritos'
import { Pedidos } from './Pedidos/Pedidos'
import { Perfil } from './Perfil/Perfil'
import { PedidoEnCurso } from './PedidoEnCurso/PedidoEnCurso'
import { NuevoPedido } from './NuevoPedido/NuevoPedido'
import { Descartados } from './Descartados/Descartados'
import { Facturas } from './Facturas/Facturas'

const GridContainerConsumer = ({ consumerDashboard, consumerInfo, setConsumer }) => {
  const { dashboard } = consumerDashboard
  const gridsContainer = {
    pedidos: <Pedidos {...{ consumerInfo }} />,
    facturas: <Facturas {...{ consumerInfo }} />,
    nuevoPedido: <NuevoPedido {...{ consumerInfo, setConsumer }} />,
    pedidoEnCurso: <PedidoEnCurso {...{ consumerInfo, setConsumer }} />,
    perfil: <Perfil {...{ consumerInfo, setConsumer }} />,
    favoritos: <Favoritos {...{ consumerInfo, setConsumer }} />,
    descartados: <Descartados {...{ consumerInfo, setConsumer }} />
  }
  return <aside className="asideContainer">{gridsContainer[dashboard]}</aside>
}

export default GridContainerConsumer
