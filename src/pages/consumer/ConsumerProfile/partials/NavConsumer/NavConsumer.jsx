import { memo } from 'react'
import Avatar from '../../../../../components/Avatar/Avatar'
import NavigationButton from '../../../../../components/NavNavigationButton/NavigationButton'

import { nav } from './navConsumer.module.scss'

export const NavConsumer = memo(({ consumerDashboard, setConsumerDashboard, consumerInfo }) => {
  const { dashboard } = consumerDashboard
  return (
    <nav className={nav}>
      <Avatar src={consumerInfo?.avatar} size="xl" />
      <NavigationButton
        text="Mis pedidos"
        options={[{ name: 'Facturas' }]}
        onClick={() =>
          dashboard !== 'pedidos' &&
          setConsumerDashboard({
            ...consumerDashboard,
            dashboard: 'pedidos',
            method: 'get',
            endpoint: `consumer/${consumerInfo._id}`
          })
        }
        onClickOption={({ target: { textContent } }) => {
          dashboard !== 'facturas' &&
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
        onClick={() => {
          dashboard !== 'favoritos' &&
            setConsumerDashboard({ ...consumerDashboard, dashboard: 'favoritos' })
        }}
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
