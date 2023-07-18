'use client';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ReactNode } from 'react';

export const Form = ({ onSubmit, children }: { children: ReactNode; onSubmit: SubmitHandler<FieldValues> }) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
