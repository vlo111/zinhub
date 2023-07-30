'use client';
import { ReactNode } from 'react';
import { ROLE, useAuth } from '@/providers/auth';
import { notFound } from 'next/navigation';
import { CompanyHeader } from '@/components/header/company';
import { FooterLayout } from '@/components/footer/layout';

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => {
  const { role } = useAuth();

  if (role !== ROLE.COMPANY) notFound();

  return (
    <>
      <CompanyHeader />
      {children}
      <FooterLayout />
    </>
  );
};
