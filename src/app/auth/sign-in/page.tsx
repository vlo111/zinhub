'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
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
    handleSubmit,
  } = useForm<FormItems>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('Data - ', data);
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <FormItem label="Email" name="email">
        <Input name="email" />
      </FormItem>
      <FormItem label="Գաղտնաբառ" name="password">
        <Input name="password" />
      </FormItem>
      <Button value="Մուտք գործել" />
    </form>
  );
};

export default SignIn;
