'use client';
import { default as Logo } from '@/components/icons/logo.svg';
import './footer.css';
import { ReactNode } from 'react';

export const FooterLayout = ({ children }: { children?: ReactNode }) => {
  return (
    <footer className="flex justify-between px-20 py-4 xs:flex xs:flex-col xs:px-0 xs:py-0 xs:items-center items-center bg-davy-gray">
      <Logo />
      {children}
      <div className="content">
        <h4>System admin page</h4>
        <h4>Lorem ipsum dolor</h4>
        <h4>Lorem ipsum</h4>
      </div>
      <div className="content">
        <h4>System admin page</h4>
        <h4>Lorem ipsum dolor</h4>
        <h4>Lorem ipsum</h4>
        <h4>Lorem ipsum dolor sit</h4>
      </div>
    </footer>
  );
};
