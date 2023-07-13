import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn, FieldErrors } from 'react-hook-form';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  register: UseFormRegisterReturn;
  errors?: FieldErrors;
};

export const Input: React.FC<Props> = ({ register, errors, ...rest }) => {
  const error = errors?.[register.name]?.message;

  return (
    <input
      className={`rounded-md border ${!!error ? 'border-error' : 'border-gray'} h-10 outline-0 p-2 w-full`}
      {...register}
      {...rest}
    />
  );
};
