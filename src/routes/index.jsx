import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from './app.routes.jsx'
import { AuthRoutes } from './auth.routes'

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
