'use client';
import React, { createContext, useState, useEffect, useContext } from 'react';
import { AUTH_KEYS } from '@/helpers/constants';
import { UserDetails } from '@/api/types';

// Define the AuthContext data type
interface AuthContextData {
  user: UserDetails | null;
  login: ({ user, token }: { user: UserDetails; token: string }) => Promise<void>;
  logout: VoidFunction;
  isAuthenticated: boolean;
}

// Create the AuthContext and set the initial values
const AuthContext = createContext<AuthContextData>({
  user: null,
  login: async () => {
    return;
  },
  logout: () => {
    return;
  },
  isAuthenticated: false,
});

// Define the AuthProviderProps interface
interface AuthProviderProps {
  children: React.ReactNode;
}

// Create the AuthProvider component
const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const isAuthenticated = !!user;

  // Simulate login action (replace this with your actual login logic)
  const login = async ({ user, token }: { user: UserDetails; token: string }) => {
    try {
      // Save the token in localStorage (you can also use cookies for more security)
      localStorage.setItem(AUTH_KEYS.TOKEN, token);

      // Update the user state
      setUser(user);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Login error:', error);
      throw error;
    }
  };

  // Simulate logout action (replace this with your actual logout logic)
  const logout = () => {
    // Clear the token from localStorage
    localStorage.removeItem(AUTH_KEYS.TOKEN);
    // Remove the user data from the state
    setUser(null);
  };

  // Check authentication status on initial load
  useEffect(() => {
    const token = localStorage.getItem(AUTH_KEYS.TOKEN);

    if (token) {
      // Replace this with your actual token validation logic
      // Example: validateToken(token).then((user) => setUser(user)).catch(logout);
      // For this example, let's assume the token is valid.
      setUser(null);
    }
  }, []);

  // Return the provider with the necessary context values
  return <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>{children}</AuthContext.Provider>;
};

// Create a custom hook to access the AuthContext
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
