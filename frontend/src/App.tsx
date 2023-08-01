import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from 'context/AuthContext';
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
