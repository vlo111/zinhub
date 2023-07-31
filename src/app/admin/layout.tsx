'use client';
import React, { ReactNode } from 'react';
import { ROLE, useAuth } from '@/providers/auth';
import { notFound } from 'next/navigation';
import { CompanyHeader } from '@/components/header/company';
import { FooterLayout } from '@/components/footer/layout';
import { Menu } from '@/components/menu';
import { AdminMenuItems } from '@/app/admin/components/utils';

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => {
  const { role } = useAuth();

  if (role !== ROLE.COMPANY) notFound();

  return (
    <>
      <CompanyHeader />
      <div className="mb-20">
        <div className="flex px-20 pt-10 gap-10 h-full lg:px-10 md:px-3 sm:px-3 xs:px-3 xs:flex-col">
          <Menu items={AdminMenuItems} />
          <div className="bg-white w-full">{children}</div>
        </div>
      </div>
      <FooterLayout />
    </>
  );
};
