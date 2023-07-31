'use client';
import { ReactNode } from 'react';
import FormProvider from '@/components/form/provider';
import PostType from '../components/checks';

export default ({ children }: { children: ReactNode }) => (
  <div className='p-20'>
    <PostType />
    <FormProvider>{children}</FormProvider>
  </div>
);
