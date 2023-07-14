'use client';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export interface IFormData {
  name: boolean;
}

export default ({ children }: { children: ReactNode }) => (
  <FormProvider {...useForm<IFormData>()}>{children}</FormProvider>
);
