'use client';
import { SubmitHandler } from 'react-hook-form';
import FormItems from './items';
import { Form } from '@/components/form';
import { useSignUp } from '@/api/auth/use-sign-up';

type FormData = {
  taxAccount: string;
  companyName: string;
  phone: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export default () => {
  const { mutate } = useSignUp();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // eslint-disable-next-line no-console
    console.log('Data - ', data);
    mutate(data);
  };

  return (
    <Form<FormData> onSubmit={onSubmit}>
      <FormItems />
    </Form>
  );
};
