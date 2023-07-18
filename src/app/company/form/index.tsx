'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import PhoneNumberInput from '@/components/input/phone-number-input';
import { registerEmailField } from '@/helpers/registers';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import Button from '@/components/button';
import {
  registerAbout,
  registerAddress,
  registerCountOfWorkers,
  registerCreatedField,
  registerTypeField,
  registerValue,
} from '../form/registers';
import Header from '../components/header';

export type FormItems = {
  phone: string;
  state: string;
  type: string;
  countOfWorkers: string;
  email: string;
  address: string;
  about: string;
  value: string;
  created: string;
  site: string;
};

export default ({ id }: { id?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormItems>();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line no-console
    console.log('Data - ', data, id);
  };

  return (
    <form className="flex flex-col gap-8 m-auto mt-10 mb-16 w-[90%]" onSubmit={handleSubmit(onSubmit)}>
      <Header />
      <div className="flex flex-row gap-20 xs:flex-col xs:gap-4">
        <div className="w-full">
          <FormItem label="Հեռախոսահամար" error={errors.phone?.message}>
            <PhoneNumberInput />
          </FormItem>
          <FormItem label="Email" error={errors.email?.message}>
            <Input register={register('email', registerEmailField)} errors={errors} />
          </FormItem>
          <FormItem label="Մարզ">
            <Input register={register('state')} />
          </FormItem>
          <FormItem label="Գտնվելու վայրը" error={errors.address?.message}>
            <Input register={register('address', registerAddress)} errors={errors} />
          </FormItem>
        </div>
        <div className="w-full">
          <FormItem label="Աշխատակիցների քանակ" error={errors.countOfWorkers?.message}>
            <Input type="number" register={register('countOfWorkers', registerCountOfWorkers)} errors={errors} />
          </FormItem>
          <FormItem label="Ընկերության տեսակը">
            <Input register={register('type', registerTypeField)} />
          </FormItem>
          <FormItem label="Ստեղծման տարեթիվը">
            <Input register={register('created', registerCreatedField)} />
          </FormItem>
          <FormItem label="Կայքը">
            <Input register={register('site')} />
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
