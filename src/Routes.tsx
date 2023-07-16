import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateForm from './pages/CreateForm';
import ViewForm from './pages/ViewForm';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import LoginGoogle from './pages/LoginGoogle';
import LandingPage from './pages/LandingPage';
import RequireAuth from './components/RequireAuth';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/edit/:formId"
          element={<RequireAuth><CreateForm /></RequireAuth>}
        />
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/dashboard"
          element={<RequireAuth><AdminDashboard /></RequireAuth>}
        />
        <Route
          path="/form/:formId"
          element={<ViewForm />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/login/auth"
          element={<LoginGoogle />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
