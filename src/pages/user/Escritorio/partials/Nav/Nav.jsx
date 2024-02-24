import { memo } from 'react'

import NavigationButton from '../../../../../components/NavNavigationButton/NavigationButton'
import Avatar from '../../../../../components/Avatar/Avatar'
import './Nav.css'

const Nav = memo(({ escritorio, setEscritorio, consumerGroups, setConsumerGroup }) => {
  const getIsActive = (dashboard) =>
    escritorio.dashboard === dashboard
      ? { color: 'blue', backgroundColor: 'white' }
      : { color: 'white', backgroundColor: 'inherit' }

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
        color={getIsActive('consumerGroups').color}
        backgroundColor={getIsActive('consumerGroups').backgroundColor}
        options={options}
        onBlurOption={({ target: { style } }) => {
          style.color = 'white'
          style.backgroundColor = 'inherit'
        }}
        onClickOption={({ target: { textContent, style } }) => {
          dashboard !== 'gruposDeConsumo' &&
            setEscritorio({
              endpoint: 'consumerGroup',
              dashboard: 'consumerGroup',
              option: textContent
            })

          style.color = 'blue'
          style.backgroundColor = 'white'
          if (consumerGroups)
            setConsumerGroup(
              consumerGroups.find(({ name }) => textContent.toLowerCase() === name.toLowerCase())
            )
        }}
      />
      <NavigationButton
        text="Consumidores"
        color={getIsActive('consumer').color}
        backgroundColor={getIsActive('consumer').backgroundColor}
        onClick={() =>
          dashboard !== 'consumer' && setEscritorio({ endpoint: 'consumer', dashboard: 'consumer' })
        }
      />
      <NavigationButton
        text="Hojas de Reparto"
        color={getIsActive('castSheets').color}
        backgroundColor={getIsActive('castSheets').backgroundColor}
        onClick={() =>
          dashboard !== 'castSheets' &&
          setEscritorio({ endpoint: 'castSheets', dashboard: 'castSheets' })
        }
      />
      <NavigationButton
        text="Facturas"
        color={getIsActive('bill').color}
        backgroundColor={getIsActive('bill').backgroundColor}
        onClick={() =>
          dashboard !== 'bill' && setEscritorio({ endpoint: 'bill', dashboard: 'bill' })
        }
      />
      <NavigationButton
        text="Crear Grupo"
        color={getIsActive('createGroup').color}
        backgroundColor={getIsActive('createGroup').backgroundColor}
        onClick={() =>
          dashboard !== 'createGroup' &&
          setEscritorio({ endpoint: 'consumerGroup', dashboard: 'createGroup' })
        }
      />
      <NavigationButton
        text="Crear Consumidor"
        color={getIsActive('createConsumer').color}
        backgroundColor={getIsActive('createConsumer').backgroundColor}
        onClick={() =>
          dashboard !== 'createConsumer' &&
          setEscritorio({ endpoint: 'consumer', dashboard: 'createConsumer' })
        }
      />
      <NavigationButton
        text="Pedidos Registrados"
        color={getIsActive('finalRecord').color}
        backgroundColor={getIsActive('finalRecord').backgroundColor}
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
