'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { registerEmailField, registerPasswordField } from './registers';
import Button from '@/components/button';

export type FormItems = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  customField: string;
  additionalField: string;
  phone: string;
};

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormItems>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('Data - ', data);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <FormItem label="Email" error={errors.email?.message}>
        <Input register={register('email', registerEmailField)} errors={errors} />
      </FormItem>
      <FormItem label="Գաղտնաբառ" error={errors.password?.message}>
        <Input type="password" register={register('password', registerPasswordField)} errors={errors} />
      </FormItem>
      <Button value="Մուտք գործել" />
    </form>
  );
};

export default SignIn;
