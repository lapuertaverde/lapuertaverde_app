import { useState, useEffect, Suspense, lazy } from 'react'
import Nav from '../../../components/Nav/Nav'
import Loading from '../../../components/Loading/Loading'

import useEscritorioFetch from './useEscritorioFetch'
import './Escritorio.css'

const Escritorio = () => {
  const GridContainer = lazy(() => import('./partials/GridContainer'))

  const [escritorio, setEscritorio] = useState({
    gruposDeConsumo: true,
    consumidores: false,
    hojasDeReparto: false,
    creargrupo: false
  })

  const { consumers, consumerGroup, setConsumerGroup, consumerGroups } =
    useEscritorioFetch(escritorio)

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
