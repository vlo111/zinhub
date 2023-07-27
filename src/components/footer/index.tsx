'use client';
import { ROLE, useAuth } from '@/providers/auth';
import { FooterLayout } from '@/components/footer/layout';
import { usePathname } from 'next/navigation';
import { isAuth } from '@/helpers/utils';
import { LoginButtons } from '@/components/button/login-buttons';
import './footer.css';

export const Footer = () => {
  const { user, role } = useAuth();

  if (isAuth(usePathname(), user)) return null;

  return <FooterLayout>{role !== ROLE.COMPANY && <LoginButtons />}</FooterLayout>;
};
