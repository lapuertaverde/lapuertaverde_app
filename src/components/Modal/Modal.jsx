import { createPortal } from 'react-dom'

const Modal = ({ openModal, setOpenModal, children }) =>
  openModal &&
  createPortal(
    <div
      style={{
        width: '400px',
        height: '400px',
        backgroundColor: 'white',
        zIndex: '999999999',
        alignSelf: 'center',
        border: '1px solid white',
        position: 'fixed'
      }}
    >
      Modal
      {children}
      <button onClick={() => setOpenModal(false)} style={{ cursor: 'pointer' }}>
        Close Modal
      </button>
    </div>,
    document.getElementById('root')
  )

export default Modal
