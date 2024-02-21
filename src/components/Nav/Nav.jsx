import { memo } from 'react'

import NavigationButton from '../NavNavigationButton/NavigationButton'

import './Nav.css'

const Nav = memo(({ escritorio, setEscritorio, consumerGroups, setConsumerGroup }) => {
  return (
    <nav className="nav">
      <NavigationButton
        text="Grupos de consumo"
        onClick={() => escritorio !== 'consumerGroup' && setEscritorio('consumerGroup')}
        options={consumerGroups}
        onClickOption={({ target: { textContent } }) => {
          escritorio !== 'gruposDeConsumo' && setEscritorio('consumerGroup')
          if (consumerGroups)
            setConsumerGroup(
              consumerGroups.find(({ name }) => textContent.toLowerCase() === name.toLowerCase())
            )
        }}
      />
      <NavigationButton
        text="Consumidores"
        onClick={() => escritorio !== 'consumer' && setEscritorio('consumer')}
        options={[{ name: 'Todos' }, { name: 'Deudores' }, { name: 'Por Grupo' }]}
      />
      <NavigationButton
        text="Hojas de Reparto"
        onClick={() => escritorio !== 'castSheets' && setEscritorio('castSheets')}
      />
      <NavigationButton
        text="Facturas"
        onClick={() => escritorio !== 'bill' && setEscritorio('bill')}
        options={[{ name: 'Por Grupo' }, { name: 'Por Fecha' }]}
      />
      <NavigationButton
        text="Crear Grupo"
        onClick={() => escritorio !== 'createGroup' && setEscritorio('createGroup')}
      />
      <NavigationButton
        text="Crear Consumidor"
        onClick={() => escritorio !== 'createConsumer' && setEscritorio('createConsumer')}
      />
      <NavigationButton
        text="Pedidos Registrados"
        onClick={() => escritorio !== 'finalRecord' && setEscritorio('finalRecord')}
      />
    </nav>
  )
})

Nav.displayName = 'Nav'

export default Nav
