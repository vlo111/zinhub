'use client';
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { User, UserDetails } from '@/types/auth';
import { AUTH_KEYS, PATHS } from '@/helpers/constants';
import { usePathname, useRouter } from 'next/navigation';
import { useLocalStorage } from '@/hooks/use-local-storage';

interface AuthContextType {
  user: UserDetails | null;
  addUser: (user: UserDetails | null) => void;
  login: (user: User | null) => void;
  logout: () => void;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
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

const isExceptedRoutes = (path: string) => path === PATHS.SIGN_IN || path === PATHS.SIGN_UP;

const localStorageUser = typeof window !== 'undefined' && localStorage.getItem(AUTH_KEYS.USER);

const AuthProvider = (props: AuthProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<UserDetails | null>(() => (localStorageUser ? JSON.parse(localStorageUser) : null));

  const { setItem, removeItem } = useLocalStorage();

  const addUser = useCallback(
    (user: UserDetails | null) => {
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
    (user: User | null) => {
      addUser(user?.user || null);
      addToken(user?.access_token);
    },
    [addToken, addUser]
  );

  const logout = useCallback(() => {
    removeUser();
  }, [removeUser]);

  const providerValues = useMemo(() => ({ user, login, logout, addUser }), [addUser, login, logout, user]);

  useEffect(() => {
    if (user === null && !isExceptedRoutes(pathname)) {
      router.push(PATHS.SIGN_IN);
    }
  }, [pathname, router, user]);

  return <AuthContext.Provider value={providerValues} {...props} />;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(`useAuth must be used within a AuthProvider`);
  }
  return context;
};

export { AuthProvider, useAuth };
