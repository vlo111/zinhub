'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { registerAdditionalField } from './registers';
import PhoneNumberInput from '@/components/input/phone-number-input';
import Button from '@/components/button';
import { registerEmailField } from '@/helpers/registers';

export type FormItems = {
  email: string;
  additionalField: string;
  phone: string;
};

export default () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormItems>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line no-console
    console.log('Data - ', data);
  };

  return (
    <form className="flex flex-col m-auto w-1/2 xs:w-full sm:w-full" onSubmit={handleSubmit(onSubmit)}>
      <FormItem label="Կազմակերպության անվանում" error={errors.additionalField?.message}>
        <Input register={register('additionalField', registerAdditionalField)} errors={errors} />
      </FormItem>
      <FormItem label="Email" error={errors.email?.message}>
        <Input register={register('email', registerEmailField)} errors={errors} />
      </FormItem>
      <FormItem label="Հեռախոսահամար" error={errors.phone?.message}>
        <PhoneNumberInput />
      </FormItem>
      <Button className="ml-auto" value="Հաստատել և շարունակել" />
    </form>
  );
};
