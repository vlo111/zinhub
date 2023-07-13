import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  register: UseFormRegisterReturn;
};

export const Input: React.FC<Props> = ({ register, ...rest }) => {
  return <input className="rounded-md border border-gray h-10 outline-0 p-2 w-full" {...register} {...rest} />;
};
