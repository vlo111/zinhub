'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import Button from '@/components/button';
import { Form } from '@/components/form';

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
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('Data - ', data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormItem label="Email" name="email">
        <Input name="email" />
      </FormItem>
      <FormItem label="Գաղտնաբառ" name="password">
        <Input name="password" />
      </FormItem>
      <Button value="Մուտք գործել" />
    </Form>
  );
};

export default SignIn;
