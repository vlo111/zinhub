'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import FormItems from './form-items';
import { useAuth } from '@/context/auth';

export default () => {
  const { login } = useAuth();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line no-console
    login('Ast', '123');
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <FormItems />
      </Form>
    </>
  );
};
