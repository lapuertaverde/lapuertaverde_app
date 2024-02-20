import { Suspense, useState } from 'react'
import { useConsumerById } from './useConsumerById'
import { NavConsumer } from '../../../components/NavConsumer/NavConsumer'
import Loading from '../../../components/Loading/Loading'

import { mainContainer } from './consumerProfile.module.scss'
import GridContainerConsumer from './partials/GridContainerConsumer'

const ConsumerProfile = () => {
  const getConsumerID = () => {
    const { consumer } = JSON.parse(sessionStorage.getItem('token'))
    return consumer
  }

  const [consumerDashboard, setConsumerDashboard] = useState('pedidos')

  const [consumer, setConsumer] = useState(useConsumerById(getConsumerID(), consumerDashboard))

  return (
    <main className={mainContainer}>
      <NavConsumer {...{ consumerDashboard, setConsumerDashboard }} />
      <Suspense fallback={<Loading />}>
        <GridContainerConsumer {...{ consumerDashboard, consumer, setConsumer }} />
      </Suspense>
    </main>
  )
}

export default ConsumerProfile
