'use client';
import { useFormContext } from 'react-hook-form';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import PhoneNumberInput from '@/components/input/phone-number-input';
import Button from '@/components/button';
import PasswordInput from '@/components/input/password-input';

export default () => {
  const { register, getValues } = useFormContext();

  const registerRepeatPasswordField = {
    required: 'Կրկնել գաղտնաբառը պարտադիր է',
    validate: (value: string) => value === getValues('password') || 'Գաղտնաբառերը չեն համապատասխանում',
  };

  return (
    <>
      <FormItem label="Կազմակերպության անվանում" name="companyName">
        <Input name="companyName" />
      </FormItem>
      <FormItem label="ՀՎՀՀ" name="hvhh">
        <Input name="taxAccount" />
      </FormItem>
      <FormItem label="Email" name="email">
        <Input name="email" />
      </FormItem>
      <FormItem label="Հեռախոսահամար" name="phone">
        <PhoneNumberInput />
      </FormItem>
      <FormItem label="Գաղտնաբառ" name="password">
        <PasswordInput name="password" />
      </FormItem>
      <FormItem label="Կրկնել գաղտնաբառը" name="repeatPassword">
        <PasswordInput name="repeatPassword" validation={register('repeatPassword', registerRepeatPasswordField)} />
      </FormItem>
      <Button value="Գրանցվել" className="w-[9rem] ml-[calc(100%-9rem)]" />
    </>
  );
};
