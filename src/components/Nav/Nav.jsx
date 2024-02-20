import { memo } from 'react'

import NavigationButton from '../NavNavigationButton/NavigationButton'

import './Nav.css'

const Nav = memo(({ escritorio, setEscritorio, consumerGroups, setConsumerGroup }) => {
  return (
    <nav className="nav">
      <NavigationButton
        text="Grupos de consumo"
        onClick={() => escritorio !== 'gruposDeConsumo' && setEscritorio('gruposDeConsumo')}
        options={consumerGroups}
        onClickOption={({ target: { textContent } }) => {
          escritorio !== 'gruposDeConsumo' && setEscritorio('gruposDeConsumo')
          if (consumerGroups)
            setConsumerGroup(
              consumerGroups.find(({ name }) => textContent.toLowerCase() === name.toLowerCase())
            )
        }}
      />
      <NavigationButton
        text="Consumidores"
        onClick={() => escritorio !== 'consumidores' && setEscritorio('consumidores')}
        options={[{ name: 'Todos' }, { name: 'Deudores' }, { name: 'Por Grupo' }]}
      />
      <NavigationButton
        text="Hojas de Reparto"
        onClick={() => escritorio !== 'hojasDeReparto' && setEscritorio('hojasDeReparto')}
      />
      <NavigationButton
        text="Facturas"
        onClick={() => escritorio !== 'creargrupo' && setEscritorio('facturas')}
        options={[{ name: 'Por Grupo' }, { name: 'Por Fecha' }]}
      />
      <NavigationButton
        text="Crear Grupo"
        onClick={() => escritorio !== 'creargrupo' && setEscritorio('crearGrupo')}
      />
      <NavigationButton
        text="Crear Consumidor"
        onClick={() => escritorio !== 'creargrupo' && setEscritorio('crearConsumidor')}
      />
    </nav>
  )
})

Nav.displayName = 'Nav'

export default Nav
