import { memo } from 'react'
import Avatar from '../Avatar/Avatar'
import NavigationButton from '../NavNavigationButton/NavigationButton'

import { nav } from './navConsumer.module.scss'

export const NavConsumer = memo(({ consumerDashboard, setConsumerDashboard, consumerInfo }) => {
  console.log('log en nav de consumer', consumerInfo)
  return (
    <nav className={nav}>
      <Avatar src={consumerInfo?.avatar} size="xl" />
      <NavigationButton
        text="Mis pedidos"
        onClick={() => consumerDashboard !== 'pedidos' && setConsumerDashboard('pedidos')}
        options={[{ name: 'Pedidos' }, { name: 'Facturas' }]}
      />
      <NavigationButton
        text="Nuevo pedido"
        onClick={() =>
          consumerDashboard !== 'proximoPedido' && setConsumerDashboard('proximoPedido')
        }
      />
      <NavigationButton
        text="Pedido en curso"
        onClick={() =>
          consumerDashboard !== 'pedidoEnCurso' && setConsumerDashboard('pedidoEnCurso')
        }
      />
      <NavigationButton
        text="Mis preferencias"
        onClick={() => consumerDashboard !== 'favoritos' && setConsumerDashboard('favoritos')}
        options={[{ name: 'Favoritos' }, { name: 'Descartados' }]}
      />
      <NavigationButton
        text="Perfil"
        onClick={() => consumerDashboard !== 'perfil' && setConsumerDashboard('perfil')}
      />
    </nav>
  )
})

NavConsumer.displayName = 'NavConsumer'
