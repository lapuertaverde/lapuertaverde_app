import { useState, useEffect, Suspense, lazy } from 'react'
import Nav from '../../components/Nav/Nav'
import Loading from '../../components/Loading/Loading'
import { get } from '../../services/APIServices'

import './Escritorio.css'

const Escritorio = () => {
  const GridContainer = lazy(() => import('./partials/GridContainer'))
  const [escritorio, setEscritorio] = useState({
    gruposDeConsumo: true,
    consumidores: false,
    hojasDeReparto: false,
    creargrupo: false
  })

  const [consumers, setConsumers] = useState([])
  const [consumerGroups, setConsumerGroups] = useState([])
  const [consumerGroup, setConsumerGroup] = useState(null)

  useEffect(() => {
    get('consumer').then((res) => setConsumers(res))
    get('consumerGroup').then((res) => {
      setConsumerGroups(res)
      setConsumerGroup(res[0])
    })
  }, [])

  return (
    <main className="mainContainer">
      <Nav {...{ escritorio, setEscritorio, consumerGroups, setConsumerGroup }} />
      <Suspense fallback={<Loading />}>
        <GridContainer {...{ consumerGroup, consumers, escritorio }} />
      </Suspense>
    </main>
  )
}

export default Escritorio
