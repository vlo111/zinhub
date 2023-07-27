'use client';
import Button from '@/components/button';
import { ROLE, useAuth } from '@/providers/auth';
import './footer.css';
import { FooterLayout } from '@/components/footer/layout';
import { usePathname } from 'next/navigation';
import { isAuth } from '@/helpers/utils';

export const Footer = () => {
  const { user, role } = useAuth();

  if (isAuth(usePathname(), user)) return null;

  return (
    <FooterLayout>
      {role !== ROLE.COMPANY && (
        <div className="flex gap-8 items-center">
          <Button value="Մուտք" />
          <Button value="Գրանցել ընկերություն" type="secondary" />
        </div>
      )}
    </FooterLayout>
  );
};
