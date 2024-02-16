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
        onClick={() =>
          !consumerDashboard.pedidos &&
          setConsumerDashboard({
            pedidos: true,
            proximoPedido: false,
            perfil: false,
            favoritos: false
          })
        }
      />
      <NavigationButton
        text="Próximo pedido"
        onClick={() =>
          !consumerDashboard.proximoPedido &&
          setConsumerDashboard({
            pedidos: false,
            proximoPedido: true,
            perfil: false,
            favoritos: false
          })
        }
      />
      <NavigationButton
        text="Perfil"
        onClick={() =>
          !consumerDashboard.perfil &&
          setConsumerDashboard({
            pedidos: false,
            proximoPedido: false,
            perfil: true,
            favoritos: false
          })
        }
      />
      <NavigationButton
        text="Mis Favoritos"
        onClick={() =>
          !consumerDashboard.favoritos &&
          setConsumerDashboard({
            pedidos: false,
            proximoPedido: false,
            perfil: false,
            favoritos: true
          })
        }
      />
    </nav>
  )
})

NavConsumer.displayName = 'NavConsumer'
