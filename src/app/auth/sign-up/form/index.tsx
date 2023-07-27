'use client';
import { SubmitHandler } from 'react-hook-form';
import FormItems from './items';
import { Form } from '@/components/form';

type FormData = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  customField: string;
  companyName: string;
  phone: string;
};

export default () => {
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // eslint-disable-next-line no-console
    console.log('Data - ', data);
  };

  return (
    <Form<FormData> onSubmit={onSubmit}>
      <FormItems />
    </Form>
  );
};
