import { BrowserRouter } from 'react-router-dom'
import PropTypes from 'prop-types'


import { AppRoutes } from './app.routes'
import { AuthRoutes } from './app.auth'



export function Routes({isLoggedIn}) {
  return (
    <BrowserRouter>
      {isLoggedIn ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}

Routes.propTypes = {
  isLoggedIn: PropTypes.bool
}; 