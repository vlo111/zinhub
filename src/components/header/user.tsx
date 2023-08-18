'use client';
import { Navigation } from './components/navigation';
import { navigationItems } from '@/helpers/constants';
import { Logo } from '@/components/logo';
import { LoginButtons } from '@/components/button/login-buttons';
import { ROLE, useAuth } from '@/providers/auth';
import { useEffect, useState } from 'react';
import { HeaderProfile } from './components/Header-profile';

export const UserHeader = () => {
  const { role, user } = useAuth();
  const [isClient, setIsClient] = useState('USER');

  useEffect(() => {
    setIsClient(role);
  }, [role]);

  return (
    <header className="flex justify-between px-20 py-4 xs:flex xs:flex-col xs:px-0 xs:py-0 xs:items-center relative z-10 border-b border-[#1f82ff33]">
      <Logo />
      <div className="flex gap-8 items-center">
        <Navigation navigationItems={navigationItems} />
      </div>
      {isClient === ROLE.USER ? <LoginButtons /> : <HeaderProfile name={user?.name ?? ''} />}
    </header>
  );
};
