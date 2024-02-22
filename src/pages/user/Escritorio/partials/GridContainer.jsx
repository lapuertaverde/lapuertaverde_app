import GruposDeConsumo from './GruposDeConsumo/GruposDeConsumo'
import Consumidores from './Consumidores/Consumidores'
import HojasDeReparto from './HojasDeReparto/HojasDeReparto'
import CrearGrupo from './CrearGrupo/CrearGrupo'
import Facturas from './Facturas/Facturas'
import CrearConsumidor from './CrearConsumidor/CrearConsumidor'
import RegistrosFinales from './RegistrosFinales/RegistrosFinales'
import GrupoDeConsumo from './GrupoDeConsumo/GrupoDeConsumo'

const GridContainer = ({
  consumerGroup,
  consumers,
  escritorio,
  bills,
  finalRecords,
  castSheets,
  consumerGroups
}) => {
  const { dashboard } = escritorio

  const gridsContainer = {
    consumerGroups: <GruposDeConsumo {...{ consumerGroups }} />,
    consumerGroup: <GrupoDeConsumo {...{ consumerGroup }} />,
    consumer: <Consumidores {...{ consumers }} />,
    castSheets: <HojasDeReparto {...{ castSheets }} />,
    createGroup: <CrearGrupo {...{ consumerGroups }} />,
    createConsumer: <CrearConsumidor {...{ consumers }} />,
    bill: <Facturas {...{ bills }} />,
    finalRecord: <RegistrosFinales {...{ finalRecords }} />
  }

  return <aside className="asideContainer">{gridsContainer[dashboard]}</aside>
}

export default GridContainer
