import { FormProvider, SubmitHandler, useForm, FieldValues, DefaultValues } from 'react-hook-form';
import { ReactNode } from 'react';

export const Form = <T extends FieldValues>({
  onSubmit,
  defaultValues,
  children,
}: {
  children: ReactNode;
  defaultValues?: DefaultValues<T> | undefined;
  onSubmit: SubmitHandler<T>;
}) => {
  /* Passing the FormData type to the useForm */
  const methods = useForm<T>({
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};
