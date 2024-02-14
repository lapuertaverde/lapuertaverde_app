import { Suspense, useState, lazy } from 'react'
import { useConsumerById } from './useConsumerById'
import { NavConsumer } from '../../../components/NavConsumer/NavConsumer'
import Loading from '../../../components/Loading/Loading'

import { mainContainer } from './consumerProfile.module.scss'

const ConsumerProfile = () => {
  const GridContainerConsumer = lazy(() => import('./partials/GridContainerConsumer'))

  const getConsumer = () => {
    const { consumer } = JSON.parse(sessionStorage.getItem('token'))
    return consumer
  }

  const [consumerDashboard, setConsumerDashboard] = useState({
    pedidos: true,
    proximoPedido: false,
    perfil: false,
    favoritos: false
  })

  const [consumer, setConsumer] = useState(useConsumerById(getConsumer(), consumerDashboard))

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
