import { registers } from '@/helpers/registers';
import { ISelect } from '@/types/global';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import ReactSelect from 'react-select';
import './index.css'

export const Select: React.FC<ISelect> = ({ name, options }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const error = errors?.[name]?.message;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={registers?.[name]}
        render={({ field }) => (
          <ReactSelect
            className={error ? 'error' : 'reactSelect'}
            options={options}
            {...field}
            onChange={(value) => field.onChange(value)}
            onBlur={field.onBlur}
            value={options?.find((option) => option?.value === field?.value)}
            instanceId={field.name}
          />
        )}
      />
    </div>
  );
};
