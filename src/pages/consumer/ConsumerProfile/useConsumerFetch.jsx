import { useEffect, useState } from 'react'
import { get, patch } from '../../../services/APIServices'

export const useConsumerFetch = ({ consumerDashboard, setAlert, setIsLoading }) => {
  const { endpoint, dashboard, method, values } = consumerDashboard

  const [consumerInfo, setConsumerInfo] = useState(null)
  const [orderDetail, setOrderDetail] = useState(null)
  const [products, setProducts] = useState(null)
  const [update, setUpdate] = useState(false)

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
    if (dashboard && method === 'get')
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
    if (dashboard == 'orderDetail' && method === 'patch')
      patch(endpoint, values)
        .then((res) => {
          dashboardController[dashboard](res.data.info.data.finalRecord)
          dashboardController.pedidos(res.data.info.data.consumer)
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
    if (dashboard == 'pedidos' && method === 'patch')
      patch(endpoint, values)
        .then((res) => {
          dashboardController[dashboard](res.data.info.data.consumer)
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
  }, [update])

  return { consumerInfo, orderDetail, products, setOrderDetail, setUpdate }
}
