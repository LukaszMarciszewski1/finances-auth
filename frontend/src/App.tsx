import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useAuth, AuthContextProvider } from 'context/AuthContext';

import Home from 'pages/Home';
import SigninPage from 'pages/SigninPage';
import SignupPage from 'pages/SignupPage';
import AppRoutes from 'routes/AppRoutes';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
