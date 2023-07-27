import React, { InputHTMLAttributes } from 'react';
import { useFormContext, UseFormRegisterReturn } from 'react-hook-form';
import { registers } from '@/helpers/registers';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
  validation?: UseFormRegisterReturn<string>;
};

export const Input: React.FC<Props> = ({ name, validation, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors?.[name]?.message;

  return (
    <input
      className={`rounded-md border ${
        error ? 'border-error' : 'border-gray'
      } h-10 outline-0 p-2 w-full focus:border-[2px] focus:${error ? 'border-error' : 'border-primary-blue'}`}
      {...(validation || register(name, registers[name]))}
      {...props}
    />
  );
};
