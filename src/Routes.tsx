import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateForm from './pages/CreateForm'
import ViewForm from './pages/ViewForm'
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
            <Route
                path='dashboard'
                Component={AdminDashboard}
            />
            <Route 
                path='/viewform'
                Component={ViewForm}
            />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
