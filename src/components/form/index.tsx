import { FormProvider, SubmitHandler, useForm, FieldValues } from 'react-hook-form';
import { ReactNode } from 'react';

export const Form = <T extends FieldValues>({
  onSubmit,
  children,
}: {
  children: ReactNode;
  onSubmit: SubmitHandler<T>;
}) => {
  /* Passing the FormData type to the useForm */
  const methods = useForm<T>();
  return (
    <FormProvider {...methods}>
      <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
