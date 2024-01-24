import { Navigate, Outlet } from 'react-router-dom'

const RoutesGuardian = () => {
  const token = sessionStorage.getItem('token')

  if (!token) return <Navigate to={'/'} replace />
  else return <Outlet />
}

export default RoutesGuardian
