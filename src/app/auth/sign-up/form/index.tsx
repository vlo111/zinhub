'use client';
import { SubmitHandler } from 'react-hook-form';
import FormItems from './items';
import { Form } from '@/components/form';
import { useSignUp } from '@/api/auth/use-sign-up';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';

type FormData = {
  taxAccount: string;
  companyName: string;
  phone: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export default () => {
  const router = useRouter();
  const { mutate } = useSignUp({
    onSuccess: () => {
      router.push(PATHS.SIGN_IN);
    },
  });
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    mutate(data);
  };

  return (
    <Form<FormData> onSubmit={onSubmit}>
      <FormItems />
    </Form>
  );
};
