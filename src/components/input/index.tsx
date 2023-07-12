import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = InputHTMLAttributes<HTMLInputElement> & {
  register: UseFormRegisterReturn;
};

const Input: React.FC<Props> = ({ register, ...rest }) => {
  return <input className="rounded-md border-gray h-10 px-3 py-2" {...register} {...rest} />;
};

export default Input;
