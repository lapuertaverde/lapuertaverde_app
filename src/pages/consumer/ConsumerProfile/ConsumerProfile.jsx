import { Suspense, useState } from 'react'
import { useConsumerFetch } from './useConsumerFetch'
import { NavConsumer } from '../../../components/NavConsumer/NavConsumer'
import Loading from '../../../components/Loading/Loading'

import { mainContainer } from './consumerProfile.module.scss'
import GridContainerConsumer from './partials/GridContainerConsumer'
import { getConsumerId } from '../../../utils/getConsumerId'
import AlertMessage from '../../../components/AlertMessage/AlertMessage'

const ConsumerProfile = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [alert, setAlert] = useState({ open: false })

  const [consumerDashboard, setConsumerDashboard] = useState({
    endpoint: `consumer/${getConsumerId()}`,
    dashboard: 'pedidos'
  })

  const { consumerInfo, orderDetail, products, setOrderDetail } = useConsumerFetch({
    consumerDashboard,
    setAlert,
    setIsLoading
  })

  return (
    <main className={mainContainer}>
      <NavConsumer {...{ consumerDashboard, setConsumerDashboard, consumerInfo }} />
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
              setConsumerDashboard
            }}
          />
        )}
        {alert.open && <AlertMessage {...{ alert, setAlert }} />}
      </Suspense>
    </main>
  )
}

export default ConsumerProfile
