'use client';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import FormItems from './form-items';
// import { useSignIn } from '@/api/auth/use-sign-in';

type FormData = {
  email: string;
  password: string;
};

export default () => {
  // const { mutate } = useSignIn();

  const onSubmit: SubmitHandler<FormData> = async (values) => ''; //mutate(values);

  return (
    <Form<FormData> onSubmit={onSubmit}>
      <FormItems />
    </Form>
  );
};
