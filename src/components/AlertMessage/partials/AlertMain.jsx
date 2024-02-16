import Icon from '../../Icon/Icon'

import {
  mainContainer,
  mainIconContainer,
  mainIcon,
  messageContainer
} from './alertMessagePartials.module.scss'

const AlertMain = ({ message, icon, color }) => (
  <main className={mainContainer}>
    <aside className={mainIconContainer}>
      <Icon {...{ icon }} className={mainIcon} style={{ color }} />
    </aside>
    <section className={messageContainer}>{message || ''}</section>
  </main>
)

export default AlertMain
