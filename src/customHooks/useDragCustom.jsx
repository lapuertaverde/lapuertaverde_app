import { useState } from 'react'

const useDraggableCustom = (initialPosition) => {
  const { x, y, height, width } = initialPosition

  const [position, setPosition] = useState({ x, y })

  const [isDragging, setIsDragging] = useState(false)

  const getCoordX = (e) => {
    if (e.clientX > 0 && e.clientX < window.innerWidth) return e.clientX
    if (e.clientX <= 0 || e.clientX === 0) return 0
    if (e.clientX >= window.innerWidth) return window.innerWidth - width
  }

  const getCoordY = (e) => {
    if (e.clientY > 0 && e.clientY < window.innerHeight) return e.clientY
    if (e.clientY <= 0 || e.clientY === 0) return 0
    if (e.clientY >= window.innerHeight) return window.innerHeight - height
  }

  const handleDragStart = (e) => setIsDragging(true)

  const handleDragEnd = (e) => {
    setPosition({
      x: getCoordX(e),
      y: getCoordY(e)
    })
    if (isDragging) setIsDragging(false)
  }

  return {
    position,
    isDragging,
    handleDragStart,
    handleDragEnd
  }
}

export default useDraggableCustom
