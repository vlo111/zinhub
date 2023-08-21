'use client';
import { useFormContext } from 'react-hook-form';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import Button from '@/components/button';
import PasswordInput from '@/components/input/password-input';

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
        <PasswordInput name="password" validation={register('password', registerPasswordField)} />
      </FormItem>
      <p className="text-primary-blue cursor-pointer w-full">Մոռացե՞լ եք գաղտնաբառը</p>
      <Button value="Մուտք գործել" className="w-[9rem] ml-[calc(100%-9rem)] mt-24" />
    </>
  );
};
