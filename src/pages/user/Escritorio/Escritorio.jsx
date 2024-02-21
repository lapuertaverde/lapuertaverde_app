import { useState } from 'react'
import Nav from '../../../components/Nav/Nav'
import GridContainer from './partials/GridContainer'

import AlertMessage from '../../../components/AlertMessage/AlertMessage'

import useEscritorioFetch from './useEscritorioFetch'
import './Escritorio.css'

const Escritorio = () => {
  const [alert, setAlert] = useState({ open: false })
  const [escritorio, setEscritorio] = useState('consumerGroup')

  const {
    consumers,
    bills,
    finalRecords,
    consumerGroup,
    setConsumerGroup,
    consumerGroups,
    castSheets
  } = useEscritorioFetch({
    escritorio,
    setAlert
  })

  return (
    <main className="mainContainer">
      <Nav {...{ escritorio, setEscritorio, consumerGroups, setConsumerGroup }} />
      <GridContainer
        {...{ consumerGroup, consumers, escritorio, bills, finalRecords, castSheets }}
      />
      {alert.open && <AlertMessage {...{ alert, setAlert }} />}
    </main>
  )
}

export default Escritorio
