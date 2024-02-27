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

  const consumersOptions = [
    { name: 'Crear Consumidor' },
    { name: 'Editar Consumidor' },
    { name: 'Borrar Consumidor' }
  ]
  const onClickOption = ({ target: { textContent } }) => {
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
  }

  const navigationButtons = [
    {
      text: 'Grupos de Consumo',
      dashboard: 'consumerGroups',
      endpoin: 'consumerGroups',
      options,
      onClickOption
    }
  ]

  return (
    <nav className="nav">
      <div
        style={{
          minHeight: '15rem',
          minWidth: '15rem',
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
        options={consumersOptions}
        {...{ optionStyle }}
        onClickOption={({ target: { textContent } }) => {
          setOptionsStyle(textContent)

          setEscritorio({
            endpoint: 'consumerGroup',
            dashboard: textContent.toLowerCase()
          })
        }}
      />
      <NavigationButton
        text="Productos"
        variant={getIsActive('product')}
        onClick={() => {
          setOptionsStyle(null)
          dashboard !== 'product' && setEscritorio({ endpoint: 'product', dashboard: 'product' })
        }}
        options={[
          { name: 'Crear Producto' },
          { name: 'Editar Producto' },
          { name: 'Borrar Producto' },
          { name: 'Temporada' }
        ]}
        {...{ optionStyle }}
        onClickOption={({ target: { textContent } }) => {
          setOptionsStyle(textContent)

          setEscritorio({
            endpoint: 'product',
            dashboard: textContent.toLowerCase()
          })
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
        options={[{ name: 'En Curso' }]}
        {...{ optionStyle }}
        onClickOption={({ target: { textContent } }) => {
          setOptionsStyle(textContent)

          setEscritorio({
            endpoint: 'castSheets',
            dashboard: textContent.toLowerCase()
          })
        }}
      />
      <NavigationButton
        text="Recibos"
        variant={getIsActive('bill')}
        onClick={() => {
          setOptionsStyle(null)
          dashboard !== 'bill' && setEscritorio({ endpoint: 'bill', dashboard: 'bill' })
        }}
        options={[{ name: 'Crear Recibo' }, { name: 'Editar Recibo' }, { name: 'Borrar Recibo' }]}
        {...{ optionStyle }}
        onClickOption={({ target: { textContent } }) => {
          setOptionsStyle(textContent)

          setEscritorio({
            endpoint: 'castSheets',
            dashboard: textContent.toLowerCase()
          })
        }}
      />
      <NavigationButton
        text="Pedidos Registrados"
        variant={getIsActive('finalRecord')}
        onClick={() => {
          setOptionsStyle(null)
          dashboard !== 'finalRecord' &&
            setEscritorio({ endpoint: 'finalRecord', dashboard: 'finalRecord' })
        }}
      />
      <NavigationButton
        text="Grupo"
        variant={getIsActive('createGroup')}
        onClick={() => {
          setOptionsStyle(null)
          dashboard !== 'createGroup' &&
            setEscritorio({ endpoint: 'consumerGroup', dashboard: 'createGroup' })
        }}
        options={[{ name: 'Crear Grupo' }, { name: 'Editar Grupo' }, { name: 'Borrar Grupo' }]}
        {...{ optionStyle }}
        onClickOption={({ target: { textContent } }) => {
          setOptionsStyle(textContent)

          setEscritorio({
            endpoint: 'castSheets',
            dashboard: textContent.toLowerCase()
          })
        }}
      />
    </nav>
  )
})

Nav.displayName = 'Nav'

export default Nav
