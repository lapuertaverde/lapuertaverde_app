import GruposDeConsumo from './GruposDeConsumo/GruposDeConsumo'
import Consumidores from './Consumidores/Consumidores'
import HojasDeReparto from './HojasDeReparto/HojasDeReparto'
import CrearGrupo from './CrearGrupo/CrearGrupo'
import Facturas from './Facturas/Facturas'
import CrearConsumidor from './CrearConsumidor/CrearConsumidor'

const GridContainer = ({ consumerGroup, consumers, escritorio }) => {
  const gridsContainer = {
    gruposDeConsumo: <GruposDeConsumo {...{ consumerGroup }} />,
    consumidores: <Consumidores {...{ consumers }} />,
    hojasDeReparto: <HojasDeReparto />,
    crearGrupo: <CrearGrupo />,
    crearConsumidor: <CrearConsumidor />,
    facturas: <Facturas />
  }

  return <aside className="asideContainer">{gridsContainer[escritorio]}</aside>
}

export default GridContainer
