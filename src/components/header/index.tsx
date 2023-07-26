'use client';
import { HomeHeader } from './home';
import { useAuth } from '@/context/auth';

export const Header = () => {
  const { isAuthenticated } = useAuth();

  // eslint-disable-next-line no-console
  console.log(isAuthenticated, 'IS AUTH');
  return <HomeHeader />;
};
