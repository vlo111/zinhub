'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import FormItem from '@/components/form-item';
import { Input } from '@/components/input';
import { registerAdditionalField, registerCustomField, registerEmailField, registerPasswordField } from './registers';
import PhoneNumberInput from '@/components/input/phone-number-input';

export type FormItems = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  customField: string;
  additionalField: string;
  phone: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormItems>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log('Data - ', data);
  };

  const registerRepeatPasswordField = {
    required: 'Repeat Password is required',
    validate: (value: string) => value === getValues('password') || 'Passwords do not match',
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormItem label="Password" error={errors.password?.message}>
        <Input register={register('password', registerPasswordField)} type="password" id="password" />
      </FormItem>
      <FormItem label="Repeat Password" error={errors.repeatPassword?.message}>
        <Input register={register('repeatPassword', registerRepeatPasswordField)} type="password" id="repeatPassword" />
      </FormItem>
      <FormItem label="Email" error={errors.email?.message}>
        <Input register={register('email', registerEmailField)} type="email" id="email" />
      </FormItem>
      <FormItem label="Custom Field" error={errors.customField?.message}>
        <Input register={register('customField', registerCustomField)} type="text" id="customField" />
      </FormItem>
      <FormItem label="Additional Field" error={errors.additionalField?.message}>
        <Input register={register('additionalField', registerAdditionalField)} type="text" id="additionalField" />
      </FormItem>
      <FormItem label="Phone Number" error={errors.phone?.message}>
        <PhoneNumberInput />
      </FormItem>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SignUp;
