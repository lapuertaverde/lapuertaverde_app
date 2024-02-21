import { Suspense, useEffect, useState } from 'react'
import { useConsumerById } from './useConsumerById'
import { NavConsumer } from '../../../components/NavConsumer/NavConsumer'
import Loading from '../../../components/Loading/Loading'

import { mainContainer } from './consumerProfile.module.scss'
import GridContainerConsumer from './partials/GridContainerConsumer'

const ConsumerProfile = () => {
  const [consumerDashboard, setConsumerDashboard] = useState('pedidos')

  const { data: consumerInfo, loading } = useConsumerById(consumerDashboard)

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
