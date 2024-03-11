import { useEffect, useState } from 'react'

const useDrawerWidth = ({ open }) => {
  const [width, setWidth] = useState('100%')
  const [drawerWidth, setDrawerWidth] = useState('280px')

  useEffect(() => {
    if (open) setWidth('calc(100% - 290px)')
    else setWidth('100%')
  }, [open])

  return [width, drawerWidth, setDrawerWidth, setWidth]
}

export default useDrawerWidth
