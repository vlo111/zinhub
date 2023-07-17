'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import { registerAbout, registerAddress, registerValue } from './registers';
import PhoneNumberInput from '@/components/input/phone-number-input';
import Button from '@/components/button';
import { registerEmailField } from '@/helpers/registers';

export type FormItems = {
  phone: string;
  email: string;
  address: string;
  about: string;
  value: string;
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
    <form className="flex flex-col gap-12 m-auto w-1/2 xs:w-full sm:w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row gap-20">
        <div className="w-full">
          <FormItem label="Հեռախոսահամար" error={errors.phone?.message}>
            <PhoneNumberInput />
          </FormItem>
          <FormItem label="Email" error={errors.email?.message}>
            <Input register={register('email', registerEmailField)} errors={errors} />
          </FormItem>
          <FormItem label="Գտնվելու վայրը" error={errors.address?.message}>
            <Input register={register('address', registerAddress)} errors={errors} />
          </FormItem>
        </div>
        <div className="w-full">
          <FormItem label="Հեռախոսահամար" error={errors.phone?.message}>
            <PhoneNumberInput />
          </FormItem>
          <FormItem label="Email" error={errors.email?.message}>
            <Input register={register('email', registerEmailField)} errors={errors} />
          </FormItem>
          <FormItem label="Գտնվելու վայրը" error={errors.address?.message}>
            <Input register={register('address', registerAddress)} errors={errors} />
          </FormItem>
        </div>
      </div>
      <FormItem label="Ընկերության մասին" error={errors.about?.message}>
        <Input register={register('about', registerAbout)} errors={errors} />
      </FormItem>
      <FormItem label="Ընկերության արժեքները" error={errors.value?.message}>
        <Input register={register('value', registerValue)} errors={errors} />
      </FormItem>
      <Button className="ml-auto" value="Հաստատել և շարունակել" />
    </form>
  );
};
