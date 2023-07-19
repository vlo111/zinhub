'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import FormItems from './form-items';

export default () => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line no-console
    console.log('Data - ', data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormItems />
    </Form>
  );
};
