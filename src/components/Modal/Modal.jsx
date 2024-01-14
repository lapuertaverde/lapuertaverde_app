import { string, bool, func, node, number } from 'prop-types'

import { createPortal } from 'react-dom'
import useDraggableGepeto from '../../customHooks/useDragGepeto'
import Icon from '../Icon/Icon'
import { modalContainer, titleContainer, modalIconXmark } from './modal.module.scss'

const Modal = ({ openModal, setOpenModal, children, width, height, title }) => {
  const { position, isDragging, handleDragStart, handleDragEnd } = useDraggableGepeto({
    width,
    height,
    x: window.innerWidth / 2 - width / 2,
    y: window.innerHeight / 2 - height / 2
  })

  return (
    openModal &&
    createPortal(
      <div
        draggable
        className={modalContainer}
        style={{
          width,
          height,
          position: 'absolute',
          left: position.x,
          top: position.y,
          cursor: isDragging ? 'grabbing' : 'auto',
          userSelect: 'none'
        }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div className={titleContainer}>
          {title && title}
          <Icon icon="xmark" className={modalIconXmark} onClick={() => setOpenModal(false)} />
        </div>
        {children}
      </div>,
      document.getElementById('root')
    )
  )
}

Modal.propTypes = {
  openModal: bool,
  setOpenModal: func,
  children: node,
  width: number,
  height: number,
  title: string
}

Modal.defaultProps = {
  width: 400,
  height: 400
}

export default Modal
