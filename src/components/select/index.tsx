import React from 'react';
import { useFormContext } from 'react-hook-form';

export interface IOption {
  value: string;
  label: string;
}

export interface ISelect {
  name: string;
  label: string;
  options: IOption[];
}

export const ZSelect: React.FC<ISelect> = ({ name, label, options }) => {
  const { register } = useFormContext();

  return (
    <div className="flex flex-col w-full">
      <label className="block mb-2 text-sm md:text-xs font-medium text-gray-900 dark:text-white text-davy-gray">
        {label}
      </label>
      <select
        className="bg-gray-50 border border-gray h-10 text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:border-gray"
        {...register(name)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
