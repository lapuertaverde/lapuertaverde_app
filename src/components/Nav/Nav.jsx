import { memo } from 'react'

import NavigationButton from '../NavNavigationButton/NavigationButton'

import './Nav.css'

const Nav = memo(({ escritorio, setEscritorio, consumerGroups, setConsumerGroup }) => {
  return (
    <nav className="nav">
      <NavigationButton
        text="Grupos de consumo"
        onClick={() =>
          escritorio !== 'consumerGroup' &&
          setEscritorio({ endpoint: 'consumerGroup', dashboard: 'consumerGroups' })
        }
        options={consumerGroups}
        onClickOption={({ target: { textContent } }) => {
          escritorio !== 'gruposDeConsumo' &&
            setEscritorio({ endpoint: 'consumerGroup', dashboard: 'consumerGroup' })
          if (consumerGroups)
            setConsumerGroup(
              consumerGroups.find(({ name }) => textContent.toLowerCase() === name.toLowerCase())
            )
        }}
      />
      <NavigationButton
        text="Consumidores"
        onClick={() =>
          escritorio !== 'consumer' &&
          setEscritorio({ endpoint: 'consumer', dashboard: 'consumer' })
        }
        options={[{ name: 'Todos' }, { name: 'Deudores' }, { name: 'Por Grupo' }]}
      />
      <NavigationButton
        text="Hojas de Reparto"
        onClick={() =>
          escritorio !== 'castSheets' &&
          setEscritorio({ endpoint: 'castSheets', dashboard: 'castSheets' })
        }
      />
      <NavigationButton
        text="Facturas"
        onClick={() =>
          escritorio !== 'bill' && setEscritorio({ endpoint: 'bill', dashboard: 'bill' })
        }
        options={[{ name: 'Por Grupo' }, { name: 'Por Fecha' }]}
      />
      <NavigationButton
        text="Crear Grupo"
        onClick={() =>
          escritorio !== 'createGroup' &&
          setEscritorio({ endpoint: 'consumerGroup', dashboard: 'createGroup' })
        }
      />
      <NavigationButton
        text="Crear Consumidor"
        onClick={() =>
          escritorio !== 'createConsumer' &&
          setEscritorio({ endpoint: 'consuer', dashboard: 'createConsumer' })
        }
      />
      <NavigationButton
        text="Pedidos Registrados"
        onClick={() =>
          escritorio !== 'finalRecord' &&
          setEscritorio({ endpoint: 'finalRecord', dashboard: 'finalRecord' })
        }
      />
    </nav>
  )
})

Nav.displayName = 'Nav'

export default Nav
