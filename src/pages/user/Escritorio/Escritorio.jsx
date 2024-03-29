import { useState } from 'react'
import Nav from './partials/Nav/Nav'
import GridContainer from './partials/GridContainer'

import AlertMessage from '../../../components/AlertMessage/AlertMessage'

import useEscritorioFetch from './useEscritorioFetch'
import './Escritorio.css'
import Loading from '../../../components/Loading/Loading'

const Escritorio = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState({ open: false })
  const [escritorio, setEscritorio] = useState({
    endpoint: 'consumerGroup',
    dashboard: 'consumerGroups'
  })

  const {
    consumers,
    bills,
    finalRecords,
    consumerGroup,
    setConsumerGroup,
    setConsumerGroups,
    consumerGroups,
    castSheets,
    products
  } = useEscritorioFetch({
    escritorio,
    setAlert,
    setIsLoading
  })

  return (
    <main className="mainContainer">
      <Nav {...{ escritorio, setEscritorio, consumerGroups, setConsumerGroup }} />
      <GridContainer
        {...{
          consumerGroup,
          consumers,
          escritorio,
          bills,
          finalRecords,
          castSheets,
          consumerGroups,
          setAlert,
          setConsumerGroups,
          products
        }}
      />
      {alert.open && <AlertMessage {...{ alert, setAlert }} />}
      {isLoading && <Loading />}
    </main>
  )
}

export default Escritorio
