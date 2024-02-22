import { useEffect, useState } from 'react'
import { get } from '../../../services/APIServices'
import { getConsumerId } from '../../../utils/getConsumerId'

export const useConsumerById = ({ consumerDashboard, setAlert }) => {
  const { endpoint } = consumerDashboard
  const [consumerInfo, setConsumerInfo] = useState({ data: null, loading: true })

  useEffect(() => {
    get(endpoint)
      .then((res) => setConsumerInfo({ data: res, loading: false }))
      .catch((error) => console.log(error))
  }, [endpoint])

  return consumerInfo
}
