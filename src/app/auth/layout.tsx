'use client';
import { ReactNode } from 'react';
import { default as BG } from '@/components/icons/bg.svg';
import Container from '@/app/auth/container';
import { useAuth } from '@/providers/auth';
import { redirect } from 'next/navigation';

export default ({ children }: { children: ReactNode }) => {
  if (useAuth().isAuth) redirect('/');
  return (
    <div>
      <aside className="fixed xs:scale-150">
        <BG />
      </aside>
      <Container>{children}</Container>
    </div>
  );
};
