import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateForm from './pages/CreateForm'
import AdminDashboard from './pages/AdminDashboard'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route 
                path='/edit/:formId'
                Component={CreateForm}
            />
            <Route 
                path='/'
                Component={AdminDashboard}
            />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
