import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css';
import { registers } from '@/helpers/registers';

export interface IDatePicker {
  name: string;
}

export const DatePicker: React.FC<IDatePicker> = ({ name }) => {
  const {
    control,
    formState: { errors },
    setError,
  } = useFormContext();
  const error = errors?.[name]?.message;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={registers?.[name]}
        render={({ field }) => (
          <ReactDatePicker
            {...field}
            id={name}
            selected={field.value ? new Date(field.value) : null}
            onChange={(date) => {
              
              setError(name, {});
              field.onChange(date);
            }}
            onBlur={field.onBlur}
            dateFormat="yyyy-MM-dd"
            placeholderText="YYYY-MM-DD"
            className={error ? 'errorDatepicker' : 'custom-datepicker'}
          />
        )}
      />
    </div>
  );
};
