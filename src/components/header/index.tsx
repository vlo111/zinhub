'use client';
import { useAuth, ROLE } from '@/providers/auth';
import { AuthHeader } from '@/components/header/auth';
import { CompanyHeader } from '@/components/header/company';
import { UserHeader } from '@/components/header/user';
import { usePathname } from 'next/navigation';
import { isAuth } from '@/helpers/utils';

export const Header = () => {
  const { user, role } = useAuth();
  const pathname = usePathname();

  if (!user && isAuth(pathname, user)) {
    return <AuthHeader />;
  }

  return role === ROLE.COMPANY ? <CompanyHeader /> : <UserHeader />;
};
