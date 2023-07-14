'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ReactNode } from 'react';
export default ({ onSubmit, children }: { children: ReactNode; onSubmit: SubmitHandler<FieldValues> }) => (
  <form className="flex flex-col" onSubmit={useForm().handleSubmit(onSubmit)}>
    {children}
  </form>
);
