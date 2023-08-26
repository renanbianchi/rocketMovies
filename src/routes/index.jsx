import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useAuth } from '../hooks/auth'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './app.auth'



export function Routes() {
  const { user } = useAuth()
  return (
    <BrowserRouter>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}

Routes.propTypes = {
  user: PropTypes.any
}; 