'use client';
import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';
import { useAuth } from '@/providers/auth';
import Header from './header';
import { default as BG } from '@/components/icons/bg.svg';

export default ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    user === null || push(PATHS.ROOT);
  }, [push, user]);

  return (
    <div>
      <Header />
      <aside className="fixed xs:scale-150">
        <BG />
      </aside>
      {children}
    </div>
  );
};
