import React, {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from 'react';
import { Alert } from 'react-native';
import { api } from '../services/api';

interface User {
  id?: string;
  email?: string;
  token: string;
}

interface AuthState {
  token: string;
  user: User;
}

interface AuthContextData {
  user: User;
  signIn: (email: string) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<AuthState>({} as AuthState);

  async function signIn({ email }: SignInCredentials) {
    const response = await api.get(`/start/luizarthurvm%40gmail.com`);
    console.log(response.data);

    const { token } = response.data;

    api.defaults.headers.authorization = `Bearer ${token}`;
    setData(token);
  }

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
