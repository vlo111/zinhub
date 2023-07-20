'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import FormItems from './items';
import { Form } from '@/components/form';

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
