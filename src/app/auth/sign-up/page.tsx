'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { registerAdditionalField, registerCustomField, registerPasswordField } from './registers';
import PhoneNumberInput from '@/components/input/phone-number-input';
import Button from '@/components/button';
import { registerEmailField } from '@/helpers/registers';

export type FormItems = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  customField: string;
  additionalField: string;
  phone: string;
};

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormItems>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line no-console
    console.log('Data - ', data);
  };

  const registerRepeatPasswordField = {
    required: 'Կրկնել գաղտնաբառը պարտադիր է',
    validate: (value: string) => value === getValues('password') || 'Գաղտնաբառերը չեն համապատասխանում',
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <FormItem label="Կազմակերպության անվանում" error={errors.additionalField?.message}>
        <Input register={register('additionalField', registerAdditionalField)} errors={errors} />
      </FormItem>
      <FormItem label="ՀՎՀՀ" error={errors.customField?.message}>
        <Input register={register('customField', registerCustomField)} errors={errors} />
      </FormItem>
      <FormItem label="Email" error={errors.email?.message}>
        <Input register={register('email', registerEmailField)} errors={errors} />
      </FormItem>
      <FormItem label="Հեռախոսահամար" error={errors.phone?.message}>
        <PhoneNumberInput />
      </FormItem>
      <FormItem label="Գաղտնաբառ" error={errors.password?.message}>
        <Input type="password" register={register('password', registerPasswordField)} errors={errors} />
      </FormItem>
      <FormItem label="Կրկնել գաղտնաբառը" error={errors.repeatPassword?.message}>
        <Input type="password" register={register('repeatPassword', registerRepeatPasswordField)} errors={errors} />
      </FormItem>
      <Button value="Գրանցվել" />
    </form>
  );
};
