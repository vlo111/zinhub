'use client';
import { default as Logo } from '@/components/icons/logo.svg';
import Button from '@/components/button';
import { useAuth } from '@/providers/auth';
import './footer.css';

export const Footer = () => {
  return (
    useAuth().isAuth && (
      <footer className="flex justify-between px-20 py-4 xs:flex xs:flex-col xs:px-0 xs:py-0 xs:items-center items-center bg-davy-gray">
        <Logo />
        <div className="flex gap-8 items-center">
          <Button value="Մուտք" />
          <Button value="Գրանցել ընկերություն" type="secondary" />
        </div>
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
    )
  );
};
