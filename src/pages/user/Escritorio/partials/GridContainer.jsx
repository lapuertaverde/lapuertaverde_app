import GruposDeConsumo from './GruposDeConsumo/GruposDeConsumo'
import Consumidores from './Consumidores/Consumidores'
import HojasDeReparto from './HojasDeReparto/HojasDeReparto'
import CrearGrupo from './CrearGrupo/CrearGrupo'
import Facturas from './Facturas/Facturas'
import CrearConsumidor from './CrearConsumidor/CrearConsumidor'
import RegistrosFinales from './RegistrosFinales/RegistrosFinales'
import GrupoDeConsumo from './GrupoDeConsumo/GrupoDeConsumo'
import EditConsumer from './EditarConsumidor/EditConsumer'
import DeleteConsumer from './BorrarConsumidor/DeleteConsumer'

const GridContainer = ({
  consumerGroup,
  consumers,
  escritorio,
  bills,
  finalRecords,
  castSheets,
  consumerGroups,
  setAlert,
  setConsumerGroups
}) => {
  const { dashboard } = escritorio

  const gridsContainer = {
    consumerGroups: <GruposDeConsumo {...{ consumerGroups, setAlert }} />,
    consumerGroup: <GrupoDeConsumo {...{ consumerGroup, setAlert }} />,
    consumer: <Consumidores {...{ consumers, setAlert }} />,
    castSheets: <HojasDeReparto {...{ castSheets }} />,
    createGroup: <CrearGrupo {...{ consumerGroups }} />,
    'crear consumidor': <CrearConsumidor {...{ consumerGroups, setAlert }} />,
    'editar consumidor': <EditConsumer {...{ consumerGroups, setAlert }} />,
    'borrar consumidor': <DeleteConsumer {...{ consumerGroups, setAlert, setConsumerGroups }} />,
    bill: <Facturas {...{ bills }} />,
    finalRecord: <RegistrosFinales {...{ finalRecords }} />
  }

  return <aside className="asideContainer">{gridsContainer[dashboard]}</aside>
}

export default GridContainer
