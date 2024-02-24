import { memo, useState } from 'react'

import NavigationButton from '../../../../../components/NavNavigationButton/NavigationButton'
import Avatar from '../../../../../components/Avatar/Avatar'
import './Nav.css'

const Nav = memo(({ escritorio, setEscritorio, consumerGroups, setConsumerGroup }) => {
  const getIsActive = (dashboard) => (escritorio.dashboard === dashboard ? 'active' : 'inActive')

  const options = consumerGroups?.map(({ name }) => ({
    name
  }))

  const { dashboard } = escritorio

  const [optionStyle, setOptionsStyle] = useState(null)

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
        onClick={() => {
          setOptionsStyle(null)
          dashboard !== 'consumerGroups' &&
            setEscritorio({ endpoint: 'consumerGroup', dashboard: 'consumerGroups' })
        }}
        variant={getIsActive('consumerGroups')}
        options={options}
        {...{ optionStyle }}
        onClickOption={({ target: { textContent } }) => {
          setOptionsStyle(textContent)
          dashboard !== 'gruposDeConsumo' &&
            setEscritorio({
              endpoint: 'consumerGroup',
              dashboard: 'consumerGroup',
              option: textContent
            })

          if (consumerGroups)
            setConsumerGroup(
              consumerGroups.find(({ name }) => textContent.toLowerCase() === name.toLowerCase())
            )
        }}
      />
      <NavigationButton
        text="Consumidores"
        variant={getIsActive('consumer')}
        onClick={() => {
          setOptionsStyle(null)
          dashboard !== 'consumer' && setEscritorio({ endpoint: 'consumer', dashboard: 'consumer' })
        }}
      />
      <NavigationButton
        text="Hojas de Reparto"
        variant={getIsActive('castSheets')}
        onClick={() => {
          setOptionsStyle(null)
          dashboard !== 'castSheets' &&
            setEscritorio({ endpoint: 'castSheets', dashboard: 'castSheets' })
        }}
      />
      <NavigationButton
        text="Facturas"
        variant={getIsActive('bill')}
        onClick={() => {
          setOptionsStyle(null)
          dashboard !== 'bill' && setEscritorio({ endpoint: 'bill', dashboard: 'bill' })
        }}
      />
      <NavigationButton
        text="Crear Grupo"
        variant={getIsActive('createGroup')}
        onClick={() => {
          setOptionsStyle(null)
          dashboard !== 'createGroup' &&
            setEscritorio({ endpoint: 'consumerGroup', dashboard: 'createGroup' })
        }}
      />
      <NavigationButton
        text="Crear Consumidor"
        variant={getIsActive('createConsumer')}
        onClick={() => {
          setOptionsStyle(null)
          dashboard !== 'createConsumer' &&
            setEscritorio({ endpoint: 'consumer', dashboard: 'createConsumer' })
        }}
      />
      <NavigationButton
        text="Pedidos Registrados"
        variant={getIsActive('finalRecord').color}
        onClick={() => {
          setOptionsStyle(null)
          dashboard !== 'finalRecord' &&
            setEscritorio({ endpoint: 'finalRecord', dashboard: 'finalRecord' })
        }}
      />
    </nav>
  )
})

Nav.displayName = 'Nav'

export default Nav
