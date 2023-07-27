'use client';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { AUTH_KEYS } from '@/helpers/constants';
import { useLocalStorage } from '@/hooks/use-local-storage';
import { ICompanyUserDetails } from '@/api/types';

interface AuthContextType {
  user: ICompanyUserDetails | null;
  isAuth: boolean; // New variable to indicate authentication status
  addUser: (user: ICompanyUserDetails | null) => void;
  login: (user: ICompanyUserDetails) => void;
  logout: () => void;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuth: false,
  addUser: () => {
    return;
  },
  login: () => {
    return;
  },
  logout: () => {
    return;
  },
});

const localStorageUser = typeof window !== "undefined" ? localStorage.getItem(AUTH_KEYS.USER) : null;

function AuthProvider(props: AuthProviderProps) {
  const [user, setUser] = useState<ICompanyUserDetails | null>(() =>
    localStorageUser ? JSON.parse(localStorageUser) : null
  );

  const isAuth = !!user;

  const { setItem, removeItem } = useLocalStorage();

  const addUser = useCallback(
    (user: ICompanyUserDetails | null) => {
      setItem(AUTH_KEYS.USER, JSON.stringify(user));
      setUser(user);
    },
    [setItem]
  );

  const addToken = useCallback(
    (token?: string | null) => {
      setItem(AUTH_KEYS.TOKEN, token || '');
    },
    [setItem]
  );

  const removeUser = useCallback(() => {
    setUser(null);
    removeItem(AUTH_KEYS.USER);
    removeItem(AUTH_KEYS.TOKEN);
  }, [removeItem]);

  const login = useCallback(
    ({ accessToken, ...params }: ICompanyUserDetails) => {
      addUser(params || null);
      addToken(accessToken);
    },
    [addToken, addUser]
  );

  const logout = useCallback(() => {
    removeUser();
  }, [removeUser]);

  const providerValues = useMemo(
    () => ({ user, login, logout, addUser, isAuth }),
    [addUser, login, logout, user, isAuth]
  );

  return <AuthContext.Provider value={providerValues} {...props} />;
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
}

export { AuthProvider, useAuth };
