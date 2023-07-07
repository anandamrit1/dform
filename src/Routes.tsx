import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateForm from './pages/CreateForm'

function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route 
                path='/'
                Component={CreateForm}
            />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
