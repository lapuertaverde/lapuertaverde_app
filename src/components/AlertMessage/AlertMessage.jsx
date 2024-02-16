import { createPortal } from 'react-dom'

import Icon from '../Icon/Icon'

const AlertMessage = ({ alert, setAlert }) => {
  const { open, message, title, type } = alert

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
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          zIndex: 999999999,
          top: 0,
          left: 0
        }}
      >
        <div>
          <div
            style={{
              width: '700px',
              height: '300px',
              backgroundColor: 'white',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: '8px'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                padding: '5px'
              }}
            >
              <span>{title || ''}</span>
              <Icon
                icon="xmark"
                style={{ cursor: 'pointer' }}
                callback={() => setAlert({ open: false })}
              />
            </div>

            <div
              style={{
                width: '700px',
                height: '300px',
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px'
              }}
            >
              <div style={{ width: '100px', height: '100px' }}>
                <Icon {...{ icon }} style={{ width: '100%', height: '100%', color }} />
              </div>
              <div>{message || ''}</div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  )
}

export default AlertMessage
