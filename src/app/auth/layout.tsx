'use client';
import { ReactNode } from 'react';
import Header from './header';
import { default as BG } from '@/components/icons/bg.svg';
import Container from '@/app/auth/container';

export default ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <aside className="fixed xs:scale-150">
        <BG />
      </aside>
      <Container>{children}</Container>
    </div>
  );
};
