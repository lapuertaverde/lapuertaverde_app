import { useEffect, useState } from 'react'
import { get } from '../../../services/APIServices'

const useEscritorioFetch = ({ escritorio, setAlert }) => {
  const [consumers, setConsumers] = useState(null)
  const [consumerGroups, setConsumerGroups] = useState(null)
  const [consumerGroup, setConsumerGroup] = useState(null)
  const [finalRecords, setFinalRecords] = useState(null)
  const [bills, setBills] = useState(null)
  const [castSheets, setCastsSheets] = useState(null)

  const dashboardController = {
    consumerGroup: (res) => {
      setConsumerGroups(res)
      setConsumerGroup(res[0])
    },
    consumer: (res) => setConsumers(res),
    bill: (res) => setBills(res),
    castSheets: (res) => setCastsSheets(res),
    finalRecord: (res) => setFinalRecords(res)
  }

  useEffect(() => {
    get(escritorio)
      .then((res) => dashboardController[escritorio](res))
      .catch((error) =>
        setAlert({
          open: true,
          title: `Error getting ${escritorio}`,
          message: error.message,
          type: 'error'
        })
      )
  }, [escritorio])

  return {
    consumers,
    bills,
    finalRecords,
    consumerGroup,
    setConsumerGroup,
    consumerGroups,
    castSheets
  }
}

export default useEscritorioFetch
