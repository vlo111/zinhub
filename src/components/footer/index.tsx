'use client';
import { useAuth } from '@/providers/auth';
import { FooterLayout } from '@/components/footer/layout';
import { usePathname } from 'next/navigation';
import { isAuth } from '@/helpers/utils';
import './footer.css';

export const Footer = () => {
  const { user } = useAuth();

  if (isAuth(usePathname(), user)) return null;

  return <FooterLayout></FooterLayout>;
};
