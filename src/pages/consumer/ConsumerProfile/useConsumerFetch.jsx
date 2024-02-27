import { useEffect, useState } from 'react'
import { get } from '../../../services/APIServices'

export const useConsumerFetch = ({ consumerDashboard, setAlert, setIsLoading }) => {
  const { endpoint, dashboard } = consumerDashboard

  const [consumerInfo, setConsumerInfo] = useState(null)
  const [orderDetail, setOrderDetail] = useState(null)
  const [products, setProducts] = useState(null)

  const dashboardController = {
    pedidos: (res) => setConsumerInfo(res),
    orderDetail: (res) => setOrderDetail(res),
    pedidoEnCurso: (res) => setConsumerInfo(res),
    perfil: (res) => setConsumerInfo(res),
    nuevoPedido: (res) => setProducts(res),
    favoritos: (res) => setConsumerInfo(res),
    descartados: (res) => setConsumerInfo(res),
    facturas: (res) => setConsumerInfo(res)
  }

  useEffect(() => {
    setIsLoading(true)
    if (dashboard === 'orderDetail') {
      setIsLoading(false)
      return
    }
    if (dashboard)
      get(endpoint)
        .then((res) => {
          dashboardController[dashboard](res)
          setIsLoading(false)
        })
        .catch((error) => {
          setIsLoading(false)
          setAlert({
            open: true,
            title: `Error getting ${dashboard}`,
            message: error.message,
            type: 'error'
          })
        })
  }, [dashboard])

  return { consumerInfo, orderDetail, products, setOrderDetail }
}
