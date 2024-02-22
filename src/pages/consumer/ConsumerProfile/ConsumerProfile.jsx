import { Suspense, useEffect, useState } from 'react'
import { useConsumerById } from './useConsumerById'
import { NavConsumer } from '../../../components/NavConsumer/NavConsumer'
import Loading from '../../../components/Loading/Loading'

import { mainContainer } from './consumerProfile.module.scss'
import GridContainerConsumer from './partials/GridContainerConsumer'
import { getConsumerId } from '../../../utils/getConsumerId'

const ConsumerProfile = () => {
  const [alert, setAlert] = useState({ open: false })

  const [consumerDashboard, setConsumerDashboard] = useState({
    endpoint: `consumer/${getConsumerId()}`,
    dashboard: 'pedidos'
  })

  console.log('dashboard', consumerDashboard)
  const { data: consumerInfo, loading } = useConsumerById({ consumerDashboard, setAlert })

  return (
    <main className={mainContainer}>
      <NavConsumer {...{ consumerDashboard, setConsumerDashboard, consumerInfo }} />
      <Suspense>
        {loading ? <Loading /> : <GridContainerConsumer {...{ consumerDashboard, consumerInfo }} />}
      </Suspense>
    </main>
  )
}

export default ConsumerProfile
