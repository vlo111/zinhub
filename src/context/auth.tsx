'use client';
import React, { createContext, useState, useEffect, useContext } from 'react';
import client from '@/api/client';
import { AUTH_KEYS } from '@/helpers/constants';

// Define the user object type
interface User {
  id: string;
  name: string;
}

// Define the AuthContext data type
interface AuthContextData {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
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
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  // Simulate login action (replace this with your actual login logic)
  const login = async (username: string, password: string) => {
    try {
      // Your login logic here (e.g., API calls, authentication)
      // Replace this with your actual authentication endpoint
      // const response = await fetch('/api/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ username, password }),
      // });

      const response: Response = await client.post('auth/sign-in', JSON.stringify({ username, password }));

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      const { token, user } = data;

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
      setUser({ id: 'user_id_here', name: 'user_name_here' });
    }
  }, []);

  // Return the provider with the necessary context values
  return <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>{children}</AuthContext.Provider>;
};

// Create a custom hook to access the AuthContext
const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
