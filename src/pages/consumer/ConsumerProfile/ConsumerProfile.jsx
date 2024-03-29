import { Suspense, useState } from 'react'
import { useConsumerFetch } from './useConsumerFetch'

import Loading from '../../../components/Loading/Loading'
import { NavConsumer } from './partials/NavConsumer/NavConsumer'
import { mainContainer } from './consumerProfile.module.scss'
import GridContainerConsumer from './partials/GridContainerConsumer'
import { getConsumerId } from '../../../utils/getConsumerId'
import AlertMessage from '../../../components/AlertMessage/AlertMessage'

const ConsumerProfile = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [alert, setAlert] = useState({ open: false })

  const [consumerDashboard, setConsumerDashboard] = useState({
    method: 'get',
    endpoint: `consumer/${getConsumerId()}`,
    dashboard: 'pedidos',
    values: {}
  })

  const [basket, setBasket] = useState(() => {
    const basket = sessionStorage.getItem('basket')
    return basket ? JSON.parse(basket) : null
  })

  const { consumerInfo, orderDetail, products, setOrderDetail, setUpdate } = useConsumerFetch({
    consumerDashboard,
    setAlert,
    setIsLoading
  })

  return (
    <main className={mainContainer}>
      <NavConsumer {...{ consumerDashboard, setConsumerDashboard, consumerInfo, setUpdate }} />
      <Suspense>
        {isLoading ? (
          <Loading />
        ) : (
          <GridContainerConsumer
            {...{
              consumerDashboard,
              consumerInfo,
              orderDetail,
              products,
              setOrderDetail,
              setConsumerDashboard,
              setUpdate,
              basket,
              setBasket
            }}
          />
        )}
        {alert.open && <AlertMessage {...{ alert, setAlert }} />}
      </Suspense>
    </main>
  )
}

export default ConsumerProfile
