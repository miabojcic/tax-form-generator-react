import React, { createContext, useContext, useState } from 'react';
import { User } from '../login/user';

export interface AuthState {
  isLoggedIn: boolean,
  user: User | null,
  setLoggedInUser: (user: User | null) => void
}

export const AuthContext = createContext<AuthState>({
  isLoggedIn: false,
  user: null,
  setLoggedInUser: () => {}
});

export const AuthProvider: React.FC = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    isLoggedIn: false,
    user: null,
    setLoggedInUser: (user: User | null) => {
      setState((state: AuthState) => ({ ...state, isLoggedIn: !!user,  user}))
    }
  });
  return (
    <AuthContext.Provider value={state}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthValue = () => useContext(AuthContext);
