import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './index.css'

export interface IDatePicker {
  name: string;
}

export const DatePicker: React.FC<IDatePicker> = ({ name }) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <ReactDatePicker
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            onBlur={field.onBlur}
            dateFormat="yyyy-MM-dd"
            placeholderText="YYYY-MM-DD"
            className='custom-datepicker'
          />
        )}
      />
    </div>
  );
};
