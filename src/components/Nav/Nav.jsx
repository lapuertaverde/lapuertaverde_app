import { memo } from 'react'
import Avatar from '../Avatar/Avatar'
import NavigationButton from '../NavNavigationButton/NavigationButton'

import './Nav.css'

const Nav = memo(({ escritorio, setEscritorio, consumerGroups, setConsumerGroup }) => (
  <nav className="nav">
    <Avatar
      src="https://previews.123rf.com/images/marrakeshh/marrakeshh1506/marrakeshh150600106/41508384-natural-cesta-reci%C3%A9n-recogido-hortalizas-org%C3%A1nicas-del-jard%C3%ADn.jpg"
      size="xl"
    />
    <NavigationButton
      text="Grupos de consumo"
      onClick={() =>
        !escritorio.gruposDeConsumo &&
        setEscritorio({
          gruposDeConsumo: true,
          consumidores: false,
          hojasDeReparto: false,
          creargrupo: false
        })
      }
      options={consumerGroups}
      onClickOption={({ target: { textContent } }) => {
        !escritorio.gruposDeConsumo &&
          setEscritorio({
            gruposDeConsumo: true,
            consumidores: false,
            hojasDeReparto: false,
            creargrupo: false
          })
        setConsumerGroup(
          consumerGroups.find(({ name }) => textContent.toLowerCase() === name.toLowerCase())
        )
      }}
    />
    <NavigationButton
      text="Consumidores"
      onClick={() =>
        !escritorio.consumidores &&
        setEscritorio({
          gruposDeConsumo: false,
          consumidores: true,
          hojasDeReparto: false,
          creargrupo: false
        })
      }
    />
    <NavigationButton
      text="Hojas de Reparto"
      onClick={() =>
        !escritorio.hojasDeReparto &&
        setEscritorio({
          gruposDeConsumo: false,
          consumidores: false,
          hojasDeReparto: true,
          creargrupo:false
        })
      }
    />
    <NavigationButton
      text="Crear Nuevo Grupo"
      onClick={() =>
        !escritorio.creargrupo &&
        setEscritorio({
          gruposDeConsumo: false,
          consumidores: false,
          hojasDeReparto: false,
          creargrupo: true
        })
      }
    />
  </nav>
))

Nav.displayName = 'Nav'

export default Nav
