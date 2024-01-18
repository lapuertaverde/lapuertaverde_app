import { useState, useEffect, Suspense, lazy } from 'react'
import Nav from '../../components/Nav/Nav'
import Loading from '../../components/Loading/Loading'
import { get } from '../../services/APIServices'

import './Escritorio.css'
import { useNavigate } from 'react-router-dom'

const Escritorio = () => {
  const GridContainer = lazy(() => import('./partials/GridContainer'))

  const [escritorio, setEscritorio] = useState({
    gruposDeConsumo: true,
    consumidores: false,
    hojasDeReparto: false,
    creargrupo: false
  })

  const navigate = useNavigate()

  const [consumers, setConsumers] = useState([])
  const [consumerGroups, setConsumerGroups] = useState([])
  const [consumerGroup, setConsumerGroup] = useState(null)

  const token = sessionStorage.getItem('token')

  useEffect(() => {
    if (token) {
      get('consumer')
        .then((res) => setConsumers(res))
        .catch((error) => console.log(error))

      get('consumerGroup', token)
        .then((res) => {
          setConsumerGroups(res)
          setConsumerGroup(res[0])
        })
        .catch((error) => console.log(error))
    } else {
      navigate('/')
    }
  }, [])

  return token ? (
    <main className="mainContainer">
      <Nav {...{ escritorio, setEscritorio, consumerGroups, setConsumerGroup }} />
      <Suspense fallback={<Loading />}>
        <GridContainer {...{ consumerGroup, consumers, escritorio }} />
      </Suspense>
    </main>
  ) : (
    <div>WRONG.... no token</div>
  )
}

export default Escritorio
