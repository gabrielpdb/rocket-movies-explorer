import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Signin } from '../pages/Signin'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
    </Routes>
  )
}
