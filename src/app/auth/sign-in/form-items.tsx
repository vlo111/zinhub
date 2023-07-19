'use client';
import { useFormContext } from 'react-hook-form';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import Button from '@/components/button';

const registerPasswordField = {
  required: 'Գաղտնաբառը պարտադիր է',
};

export default () => {
  const { register } = useFormContext();

  return (
    <>
      <FormItem label="Email" name="email">
        <Input name="email" />
      </FormItem>
      <FormItem label="Գաղտնաբառ" name="password">
        <Input name="password" validation={register('password', registerPasswordField)} />
      </FormItem>
      <Button value="Մուտք գործել" />
    </>
  );
};
