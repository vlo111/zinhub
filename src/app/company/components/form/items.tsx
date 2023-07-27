'use client';
import PhoneNumberInput from '@/components/input/phone-number-input';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import Button from '@/components/button';
import { Textarea } from '@/components/texarea';
import React from 'react';
import { regions } from '@/helpers/constants';
import { Select } from '@/components/select';
import { DatePicker } from '@/components/datepicker';

export const Items = () => {
  return (
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
            <Select name="state" options={regions} />
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
          <FormItem label="Ստեղծման տարեթիվը" name="creationDate">
            <DatePicker name="creationDate" />
          </FormItem>
          <FormItem label="Կայքը" name="site">
            <Input name="site" />
          </FormItem>
        </div>
      </div>
      <FormItem label="Ընկերության մասին" name="about">
        <Textarea name="about" />
      </FormItem>
      <FormItem label="Ընկերության արժեքները" name="value">
        <Textarea name="value" />
      </FormItem>
      <Button className="ml-auto block" value="Հաստատել և շարունակել" />
    </div>
  );
};
