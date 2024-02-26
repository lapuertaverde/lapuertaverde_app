import { createPortal } from 'react-dom'

import AlertMain from './partials/AlertMain'
import AlertFooter from './partials/AlertFooter'
import AlertHeader from './partials/AlertHeader'

import { modalContainer, maskContainer } from './alertMessage.module.scss'

const AlertMessage = ({ alert, setAlert }) => {
  const { open, message, title, type, footer, onClose } = alert

  const types = {
    error: { icon: 'xmark', color: 'red' },
    success: { icon: 'thumbs-up', color: 'green' },
    warn: { icon: 'triangle-exclamation', color: 'orange' }
  }

  const icon = type ? types[type].icon : 'xmark'
  const color = type ? types[type].color : 'red'

  return (
    open &&
    createPortal(
      <div className={maskContainer}>
        <div className={modalContainer}>
          <AlertHeader {...{ setAlert, title, onClose }} />
          <AlertMain {...{ message, icon, color }} />
          <AlertFooter {...{ setAlert, footer, onClose }} />
        </div>
      </div>,
      document.body
    )
  )
}

export default AlertMessage
