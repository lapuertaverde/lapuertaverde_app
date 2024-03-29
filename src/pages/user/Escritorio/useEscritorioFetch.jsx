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
  const [products, setProducts] = useState(null)

  const dashboardController = {
    consumergroups: (res) => setConsumerGroups(res),
    consumergroup: (res) => setConsumerGroups(res),
    consumer: (res) => setConsumers(res),
    bill: (res) => setBills(res),
    creategroup: (res) => setConsumerGroups(res),
    'crear consumidor': (res) => setConsumerGroups(res),
    'borrar consumidor': (res) => setConsumerGroups(res),
    'editar consumidor': (res) => setConsumerGroups(res),
    castsheets: (res) => setCastsSheets(res),
    finalrecord: (res) => setFinalRecords(res),
    product: (res) => setProducts(res)
  }

  useEffect(() => {
    setIsLoading(true)
    if (dashboard)
      get(endpoint)
        .then((res) => {
          dashboardController[dashboard.toLowerCase()](res)
          setIsLoading(false)
        })
        .catch((error) => {
          setIsLoading(false)
          setAlert({
            open: true,
            title: 'Error getting escritorio',
            message: error.message,
            type: 'error'
          })
        })
  }, [escritorio.dashboard])

  return {
    consumers,
    bills,
    finalRecords,
    consumerGroup,
    setConsumerGroup,
    setConsumerGroups,
    consumerGroups,
    castSheets,
    products
  }
}

export default useEscritorioFetch
