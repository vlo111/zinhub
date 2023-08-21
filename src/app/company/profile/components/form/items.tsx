'use client';
import PhoneNumberInput from '@/components/input/phone-number-input';
import FormItem from '@/components/form/item';
import { Input } from '@/components/input';
import Button from '@/components/button';
import { Textarea } from '@/components/texarea';
import React from 'react';
import { regions } from '@/helpers/constants';
import { Select } from '@/components/select';
import { DatePickerYear } from '@/components/datepicker/year-picker';

export const Items = () => {
  return (
    <div className="2xl:px-40 xl:px-32 lg:px-28 md:px-16 sm:px-14 xs:px-3 w-full">
      <div className="flex flex-row gap-20 xs:flex-col xs:gap-4">
        <div className="w-full">
          <FormItem label="Հեռախոսահամար" name="phone">
            <PhoneNumberInput />
          </FormItem>
          <FormItem label="Email" name="email">
            <Input name="email" />
          </FormItem>
          <FormItem label="Մարզ" name="regionId">
            <Select name="regionId" options={regions} />
          </FormItem>
          <FormItem label="Գտնվելու վայրը" name="location">
            <Input name="location" />
          </FormItem>
        </div>
        <div className="w-full">
          <FormItem label="Աշխատակիցների քանակ" name="numberOfEmployees">
            <Input name="numberOfEmployees" />
          </FormItem>
          <FormItem label="Ընկերության տեսակը" name="type">
            <Input name="type" />
          </FormItem>
          <FormItem label="Ստեղծման տարեթիվը" name="creationDate">
            <DatePickerYear name="creationDate" />
          </FormItem>
          <FormItem label="Կայքը" name="website">
            <Input name="website" />
          </FormItem>
        </div>
      </div>
      <FormItem label="Ընկերության մասին" name="description">
        <Textarea name="description" />
      </FormItem>
      <FormItem label="Ընկերության արժեքները" name="companyValues">
        <Textarea name="companyValues" />
      </FormItem>
      <Button className="ml-auto block" value="Հաստատել և շարունակել" submit={true}/>
    </div>
  );
};
