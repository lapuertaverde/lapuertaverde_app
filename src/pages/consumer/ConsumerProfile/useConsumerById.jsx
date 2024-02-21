import { useEffect, useState } from 'react'
import { get } from '../../../services/APIServices'
import { getConsumerId } from '../../../utils/getConsumerId'

export const useConsumerById = (consumerDashboard) => {
  const [consumerInfo, setConsumerInfo] = useState({ data: null, loading: true })

  useEffect(() => {
    get(`consumer/${getConsumerId()}`)
      .then((res) => setConsumerInfo({ data: res, loading: false }))
      .catch((error) => console.log(error))
  }, [consumerDashboard])

  return consumerInfo
}
