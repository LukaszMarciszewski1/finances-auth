import axios from 'axios';
import { User } from 'models/user';
import { createContext, useEffect, useState, useContext } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextData {
  user: User | null;
  signIn: (email: string, password: string) => Promise<any>;
  signUp: (name: string, email: string, password: string) => Promise<any>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData>({
  user: null,
  signIn: async () => {},
  signUp: async () => {},
  logout: () => {},
});

export const AuthContextProvider: React.FC<AuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const signUp = async (name: string, email: string, password: string) => {
    if (!name && !email && !password) return;
    try {
      await axios.post('http://localhost:5000/auth/register', {
        name,
        email,
        password,
      });
    } catch (e) {
      console.log(e)
    }
  };

  const signIn = async (email: string, password: string) => {
    if (!email && !password) return;
    try {
      const response = await axios.post('http://localhost:5000/auth/login', {
        email,
        password,
      });
      setUser(response.data);
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(e)
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  const value = {
    user,
    signUp,
    signIn,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const auth = useContext(AuthContext);

  if (!auth) {
    throw new Error('useAuth needs to be used inside AuthContextProvider');
  }

  return auth;
};
