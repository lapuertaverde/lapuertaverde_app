import Icon from '../../Icon/Icon'

import { headerContainer, titleStyle, closeIcon } from './alertMessagePartials.module.scss'

const AlertHeader = ({ setAlert, title }) => (
  <header className={headerContainer}>
    <span className={titleStyle}> {title || ''}</span>
    <Icon icon="xmark" className={closeIcon} callback={() => setAlert({ open: false })} />
  </header>
)

export default AlertHeader
