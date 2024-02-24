import { memo } from 'react'

import NavigationButton from '../NavNavigationButton/NavigationButton'
import Avatar from '../Avatar/Avatar'
import './Nav.css'

const Nav = memo(({ escritorio, setEscritorio, consumerGroups, setConsumerGroup }) => {
  const getIsActive = (dashboard) => (escritorio.dashboard === dashboard ? 'blue' : 'white')

  const options = consumerGroups?.map(({ name }) => ({ name }))

  const { dashboard } = escritorio

  return (
    <nav className="nav">
      <div
        style={{
          minHeight: '10rem',
          minWidth: '10rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <p style={{ color: 'white', fontSize: '1.3rem', fontFamily: 'cursive' }}>LA PUERTA VERDE</p>
        <Avatar
          src="https://s3.ppllstatics.com/burgosconecta/www/multimedia/2023/09/21/plantacion-marihuana-burgos-k07F-U210217577350MAB-1200x840@Burgosconecta.jpg"
          size="l"
        />
      </div>

      <NavigationButton
        text="Grupos de consumo"
        onClick={() =>
          dashboard !== 'consumerGroups' &&
          setEscritorio({ endpoint: 'consumerGroup', dashboard: 'consumerGroups' })
        }
        color={getIsActive('consumerGroups')}
        options={options}
        onBlurOption={({ target: { style } }) => (style.color = 'white')}
        onClickOption={({ target: { textContent, style } }) => {
          dashboard !== 'gruposDeConsumo' &&
            setEscritorio({
              endpoint: 'consumerGroup',
              dashboard: 'consumerGroup',
              option: textContent
            })

          style.color = 'blue'
          if (consumerGroups)
            setConsumerGroup(
              consumerGroups.find(({ name }) => textContent.toLowerCase() === name.toLowerCase())
            )
        }}
      />
      <NavigationButton
        text="Consumidores"
        color={getIsActive('consumer')}
        onClick={() =>
          dashboard !== 'consumer' && setEscritorio({ endpoint: 'consumer', dashboard: 'consumer' })
        }
      />
      <NavigationButton
        text="Hojas de Reparto"
        color={getIsActive('castSheets')}
        onClick={() =>
          dashboard !== 'castSheets' &&
          setEscritorio({ endpoint: 'castSheets', dashboard: 'castSheets' })
        }
      />
      <NavigationButton
        text="Facturas"
        color={getIsActive('bill')}
        onClick={() =>
          dashboard !== 'bill' && setEscritorio({ endpoint: 'bill', dashboard: 'bill' })
        }
      />
      <NavigationButton
        text="Crear Grupo"
        color={getIsActive('createGroup')}
        onClick={() =>
          dashboard !== 'createGroup' &&
          setEscritorio({ endpoint: 'consumerGroup', dashboard: 'createGroup' })
        }
      />
      <NavigationButton
        text="Crear Consumidor"
        color={getIsActive('createConsumer')}
        onClick={() =>
          dashboard !== 'createConsumer' &&
          setEscritorio({ endpoint: 'consumer', dashboard: 'createConsumer' })
        }
      />
      <NavigationButton
        text="Pedidos Registrados"
        color={getIsActive('finalRecord')}
        onClick={() =>
          dashboard !== 'finalRecord' &&
          setEscritorio({ endpoint: 'finalRecord', dashboard: 'finalRecord' })
        }
      />
    </nav>
  )
})

Nav.displayName = 'Nav'

export default Nav
