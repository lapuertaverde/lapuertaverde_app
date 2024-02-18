import { useEffect, useState } from 'react'
import { get } from '../../../services/APIServices'

export const useConsumerById = (consumerId, consumerDashboard) => {
  const [consumerInfo, setConsumerInfo] = useState(null)

  useEffect(() => {
    get(`consumer/${consumerId}`)
      .then((res) => setConsumerInfo(res))
      .catch((error) => console.log(error))
  }, [consumerId, consumerDashboard])

  return consumerInfo
}
