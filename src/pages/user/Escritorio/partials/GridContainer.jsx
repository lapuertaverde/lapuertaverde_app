import GruposDeConsumo from './GruposDeConsumo/GruposDeConsumo'
import Consumidores from './Consumidores/Consumidores'
import HojasDeReparto from './HojasDeReparto/HojasDeReparto'
import CrearGrupo from './CrearGrupo/CrearGrupo'
import Facturas from './Facturas/Facturas'
import CrearConsumidor from './CrearConsumidor/CrearConsumidor'
import RegistrosFinales from './RegistrosFinales/RegistrosFinales'

const GridContainer = ({
  consumerGroup,
  consumers,
  escritorio,
  bills,
  finalRecords,
  castSheets
}) => {
  const gridsContainer = {
    consumerGroup: <GruposDeConsumo {...{ consumerGroup }} />,
    consumer: <Consumidores {...{ consumers }} />,
    castSheets: <HojasDeReparto {...{ castSheets }} />,
    createGroup: <CrearGrupo />,
    createConsumer: <CrearConsumidor />,
    bill: <Facturas {...{ bills }} />,
    finalRecord: <RegistrosFinales {...{ finalRecords }} />
  }

  return <aside className="asideContainer">{gridsContainer[escritorio]}</aside>
}

export default GridContainer
