import { useState } from 'react'
import Nav from '../../../components/Nav/Nav'
import GridContainer from './partials/GridContainer'

import useEscritorioFetch from './useEscritorioFetch'
import './Escritorio.css'

const Escritorio = () => {
  const [escritorio, setEscritorio] = useState('gruposDeConsumo')

  const { consumers, consumerGroup, setConsumerGroup, consumerGroups } =
    useEscritorioFetch(escritorio)

  return (
    <main className="mainContainer">
      <Nav {...{ escritorio, setEscritorio, consumerGroups, setConsumerGroup }} />
      <GridContainer {...{ consumerGroup, consumers, escritorio }} />
    </main>
  )
}

export default Escritorio
