import { Favoritos } from './Favoritos/Favoritos'
import { Pedidos } from './Pedidos/Pedidos'
import { Perfil } from './Perfil/Perfil'
import { PedidoEnCurso } from './PedidoEnCurso/PedidoEnCurso'
import { NuevoPedido } from './NuevoPedido/NuevoPedido'
import { Descartados } from './Descartados/Descartados'
import { Facturas } from './Facturas/Facturas'
import { OrderDetail } from './OrderDetail/OrderDetail'

const GridContainerConsumer = ({
  consumerDashboard,
  consumerInfo,
  orderDetail,
  products,
  setOrderDetail,
  setConsumerDashboard,
  setUpdate
}) => {
  const { dashboard } = consumerDashboard
  const gridsContainer = {
    pedidos: <Pedidos {...{ consumerInfo, setOrderDetail, setConsumerDashboard, setUpdate }} />,
    orderDetail: (
      <OrderDetail {...{ orderDetail, setConsumerDashboard, setUpdate, consumerInfo }} />
    ),
    facturas: <Facturas {...{ consumerInfo }} />,
    nuevoPedido: <NuevoPedido {...{ products, setConsumerDashboard }} />,
    pedidoEnCurso: <PedidoEnCurso {...{ consumerInfo }} />,
    perfil: <Perfil {...{ consumerInfo }} />,
    favoritos: <Favoritos {...{ consumerInfo }} />,
    descartados: <Descartados {...{ consumerInfo }} />
  }
  return <aside className="asideContainer">{gridsContainer[dashboard]}</aside>
}

export default GridContainerConsumer
