import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateForm from './pages/CreateForm'
import AdminDashboard from './pages/AdminDashboard'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route 
                path='/'
                Component={CreateForm}
            />
            <Route 
                path='/dashboard'
                Component={AdminDashboard}
            />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
