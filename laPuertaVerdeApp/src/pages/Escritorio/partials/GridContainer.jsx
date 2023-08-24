import GruposDeConsumo from '../../GruposDeConsumo/GruposDeConsumo'
import Consumidores from '../../Consumidores/Consumidores'
import HojasDeReparto from '../../HojasDeReparto/HojasDeReparto'
import CrearGrupo from '../../CrearGrupo/CrearGrupo'

const GridContainer = ({ consumerGroup, consumers, escritorio }) => {
  const { gruposDeConsumo, consumidores, hojasDeReparto, creargrupo } = escritorio

  return (
    <aside className="asideContainer">
      {gruposDeConsumo && <GruposDeConsumo {...{ consumerGroup }} />}
      {consumidores && <Consumidores {...{ consumers }} />}
      {hojasDeReparto && <HojasDeReparto />}
      {creargrupo && <CrearGrupo />}
    </aside>
  )
}

export default GridContainer
