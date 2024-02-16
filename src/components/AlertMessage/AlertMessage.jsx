import { createPortal } from 'react-dom'

import Icon from '../Icon/Icon'

const AlertMessage = ({ openAlert, setOpenAlert }) => {
  return (
    openAlert &&
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
              <span></span>
              <Icon
                icon="xmark"
                style={{ cursor: 'pointer' }}
                callback={() => setOpenAlert(false)}
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
                <Icon
                  icon="clipboard-check"
                  style={{ width: '100%', height: '100%', color: 'green' }}
                />
              </div>
              <div>Alert Message</div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )
  )
}

export default AlertMessage
