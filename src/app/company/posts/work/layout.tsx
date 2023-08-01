'use client';
import { ReactNode } from 'react';
import FormProvider from '@/components/form/provider';

export default ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <FormProvider>{children}</FormProvider>
    </div>
  );
};
