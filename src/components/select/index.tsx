import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import ReactSelect from 'react-select';

export interface IOption {
  value: string;
  label: string;
}

export interface ISelect {
  name: string;
  options: IOption[];
}

export const Select: React.FC<ISelect> = ({ name, options }) => {
  const { control } = useFormContext();

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState }) => (
          <ReactSelect
            options={options}
            {...field}
            onChange={(value) => field.onChange(value?.value)}
            onBlur={field.onBlur}
            value={options.find((option) => option.value === field.value)}
            instanceId={field.name}
          />
        )}
      />
    </div>
  );
};
