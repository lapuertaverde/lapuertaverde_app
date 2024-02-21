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
        text="Pedidos"
        onClick={() => consumerDashboard !== 'pedidos' && setConsumerDashboard('pedidos')}
      />
      <NavigationButton
        text="Próximo pedido"
        onClick={() =>
          consumerDashboard !== 'proximoPedido' && setConsumerDashboard('proximoPedido')
        }
      />
      <NavigationButton
        text="Perfil"
        onClick={() => consumerDashboard !== 'perfil' && setConsumerDashboard('perfil')}
      />
      <NavigationButton
        text="Mis Preferencias"
        onClick={() => consumerDashboard !== 'favoritos' && setConsumerDashboard('favoritos')}
        options={[{ name: 'Favoritos' }, { name: 'Descartados' }]}
      />
    </nav>
  )
})

NavConsumer.displayName = 'NavConsumer'
