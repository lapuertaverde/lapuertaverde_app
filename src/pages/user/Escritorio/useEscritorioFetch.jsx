import { useEffect, useState } from 'react'
import { get } from '../../../services/APIServices'

const useEscritorioFetch = ({ escritorio, setAlert, setIsLoading }) => {
  const { endpoint, dashboard } = escritorio

  const [consumers, setConsumers] = useState(null)
  const [consumerGroups, setConsumerGroups] = useState(null)
  const [consumerGroup, setConsumerGroup] = useState(null)
  const [finalRecords, setFinalRecords] = useState(null)
  const [bills, setBills] = useState(null)
  const [castSheets, setCastsSheets] = useState(null)

  const dashboardController = {
    consumerGroups: (res) => setConsumerGroups(res),
    consumerGroup: (res) => setConsumerGroups(res),
    consumer: (res) => setConsumers(res),
    bill: (res) => setBills(res),
    createGroup: (res) => setConsumerGroups(res),
    createConsumer: (res) => setConsumers(res),
    castSheets: (res) => setCastsSheets(res),
    finalRecord: (res) => setFinalRecords(res)
  }

  useEffect(() => {
    setIsLoading(true)
    get(endpoint)
      .then((res) => {
        dashboardController[dashboard](res)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        setAlert({
          open: true,
          title: `Error getting ${escritorio}`,
          message: error.message,
          type: 'error'
        })
      })
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
