import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from './pages/AdminDashboard'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route 
                path='/'
                Component={AdminDashboard}
            />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
