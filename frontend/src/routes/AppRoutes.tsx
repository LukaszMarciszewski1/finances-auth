
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home';
import SigninPage from 'pages/SigninPage';
import SignupPage from 'pages/SignupPage';
import { useAuth } from 'context/AuthContext';

const AppRoutes = () => {

  const ProtectRoute = ({ children }: { children: React.ReactNode }) => {
    const { user } = useAuth();

    if (!user) {
      const token = localStorage.getItem('token');
      if (token) {
        return <>{children}</>;
      } else {
        return <Navigate to='/login' />;
      }
    }

    return <>{children}</>;
  };

  return (
    <Routes>
      <Route
        path='/'
        element={
          <ProtectRoute>
            <Home />
          </ProtectRoute>
        }
      />
      <Route path='/login' element={<SigninPage />} />
      <Route path='/register' element={<SignupPage />} />
    </Routes>
  );
};

export default AppRoutes;
