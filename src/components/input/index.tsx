import React, { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export const Input: React.FC<Props> = ({ name, ...props }) => {
  const { register, formState: { errors } } = useFormContext();
  const error = errors?.[name]?.message;

  return (
    <input
      className={`rounded-md border ${!!error ? 'border-error' : 'border-gray'} h-10 outline-0 p-2 w-full`}
      {...register(name)}
      {...props}
    />
  );
};
