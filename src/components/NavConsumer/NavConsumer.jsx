import { memo } from 'react'
import Avatar from '../Avatar/Avatar'
import NavigationButton from '../NavNavigationButton/NavigationButton'

import { nav } from './navConsumer.module.scss'

export const NavConsumer = memo(({ consumerDashboard, setConsumerDashboard, consumerInfo }) => {
  console.log('log en nav de consumer', consumerInfo)
  const { dashboard } = consumerDashboard
  return (
    <nav className={nav}>
      <Avatar src={consumerInfo?.avatar} size="xl" />
      <NavigationButton
        text="Mis pedidos"
        options={[{ name: 'Pedidos' }, { name: 'Facturas' }]}
        onClickOption={({ target: { textContent } }) => {
          ;(dashboard !== 'pedidos' || dashboard !== 'facturas') &&
            setConsumerDashboard({ ...consumerDashboard, dashboard: textContent.toLowerCase() })
        }}
      />
      <NavigationButton
        text="Nuevo pedido"
        onClick={() =>
          dashboard !== 'nuevoPedido' &&
          setConsumerDashboard({ ...consumerDashboard, dashboard: 'nuevoPedido' })
        }
      />
      <NavigationButton
        text="Pedido en curso"
        onClick={() =>
          dashboard !== 'pedidoEnCurso' &&
          setConsumerDashboard({ ...consumerDashboard, dashboard: 'pedidoEnCurso' })
        }
      />
      <NavigationButton
        text="Mis preferencias"
        options={[{ name: 'Favoritos' }, { name: 'Descartados' }]}
        onClickOption={({ target: { textContent } }) => {
          ;(dashboard !== 'favoritos' || dashboard !== 'descartados') &&
            setConsumerDashboard({ ...consumerDashboard, dashboard: textContent.toLowerCase() })
        }}
      />
      <NavigationButton
        text="Perfil"
        onClick={() =>
          dashboard !== 'perfil' &&
          setConsumerDashboard({ ...consumerDashboard, dashboard: 'perfil' })
        }
      />
    </nav>
  )
})

NavConsumer.displayName = 'NavConsumer'
