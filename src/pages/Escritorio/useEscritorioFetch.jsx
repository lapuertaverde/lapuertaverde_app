import { useEffect, useState } from 'react'
import { get } from '../../services/APIServices'

const useEscritorioFetch = () => {
  const [consumers, setConsumers] = useState([])
  const [consumerGroups, setConsumerGroups] = useState([])
  const [consumerGroup, setConsumerGroup] = useState(null)

  useEffect(() => {
    get('consumer')
      .then((res) => setConsumers(res))
      .catch((error) => console.log(error))

    get('consumerGroup')
      .then((res) => {
        setConsumerGroups(res)
        setConsumerGroup(res[0])
      })
      .catch((error) => console.log(error))
  }, [])

  return { consumers, consumerGroup, setConsumerGroup, consumerGroups, setConsumerGroups }
}

export default useEscritorioFetch
