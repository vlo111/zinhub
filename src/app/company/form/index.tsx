'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PhoneNumberInput from '@/components/input/phone-number-input';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import Button from '@/components/button';
import Header from '../components/header';
import { Form } from '@/components/form';

export default ({ id }: { id?: string }) => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line no-console
    console.log('Data - ', data, id);
  };

  return (
    <div className="m-auto mt-10 mb-16 w-[90%]">
      <Form onSubmit={onSubmit}>
        <Header />
        <div className="2xl:px-40 xl:px-32 lg:px-28 md:px-16 sm:px-14 xs:px-3">
          <div className="flex flex-row gap-20 xs:flex-col xs:gap-4">
            <div className="w-full">
              <FormItem label="Հեռախոսահամար" name="phone">
                <PhoneNumberInput />
              </FormItem>
              <FormItem label="Email" name="email">
                <Input name="email" />
              </FormItem>
              <FormItem label="Մարզ" name="state">
                <Input name="state" />
              </FormItem>
              <FormItem label="Գտնվելու վայրը" name="address">
                <Input name="address" />
              </FormItem>
            </div>
            <div className="w-full">
              <FormItem label="Աշխատակիցների քանակ" name="countOfWorkers">
                <Input name="countOfWorkers" />
              </FormItem>
              <FormItem label="Ընկերության տեսակը" name="type">
                <Input name="type" />
              </FormItem>
              <FormItem label="Ստեղծման տարեթիվը" name="created">
                <Input name="created" />
              </FormItem>
              <FormItem label="Կայքը" name="site">
                <Input name="site" />
              </FormItem>
            </div>
          </div>
          <FormItem label="Ընկերության մասին" name="about">
            <Input name="about" />
          </FormItem>
          <FormItem label="Ընկերության արժեքները" name="value">
            <Input name="value" />
          </FormItem>
          <Button className="ml-auto" value="Հաստատել և շարունակել" />
        </div>
      </Form>
    </div>
  );
};
