import { memo } from 'react'
import Avatar from '../Avatar/Avatar'
import NavigationButton from '../NavNavigationButton/NavigationButton'

import { nav } from './navConsumer.module.scss'

export const NavConsumer = memo(({ consumerDashboard, setConsumerDashboard }) => {
  return (
    <nav className={nav}>
      <Avatar
        src="https://previews.123rf.com/images/marrakeshh/marrakeshh1506/marrakeshh150600106/41508384-natural-cesta-reci%C3%A9n-recogido-hortalizas-org%C3%A1nicas-del-jard%C3%ADn.jpg"
        size="xl"
      />
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
