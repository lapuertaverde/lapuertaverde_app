import { Navigate, Outlet } from 'react-router-dom'

const RoutesGuardian = ({ allowed }) => {
  const sessionToken = sessionStorage.getItem('token')
  if (sessionToken) {
    const { token, role } = JSON.parse(sessionToken)

    if (token && allowed === role) return <Outlet />
    else return <Navigate to={'highway-to-hell'} replace />
  } else <Navigate to={'/'} />
}

export default RoutesGuardian
