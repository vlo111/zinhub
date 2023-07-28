'use client';
import { ReactNode } from 'react';
import { default as BG } from '@/components/icons/bg.svg';
import Container from '@/app/auth/container';
import { ROLE, useAuth } from '@/providers/auth';
import { redirect } from 'next/navigation';
import { PATHS } from '@/helpers/constants';

export default ({ children }: { children: ReactNode }) => {
  const { user, role } = useAuth();

  if (user !== null) redirect(role === ROLE.COMPANY ? PATHS.COMPANY_PROFILE : PATHS.ROOT);

  return (
    <div>
      <aside className="fixed xs:scale-150">
        <BG />
      </aside>
      <Container>{children}</Container>
    </div>
  );
};
