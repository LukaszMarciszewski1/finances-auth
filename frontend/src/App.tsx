import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAuth, AuthContextProvider } from 'context/AuthContext';

import Home from 'pages/Home';
import SigninPage from 'pages/SigninPage';
import SignupPage from 'pages/SignupPage';

function App() {
  const { user } = useAuth();

  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<SigninPage />} />
          <Route path='/register' element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
