import React, { TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
};

export const Textarea: React.FC<Props> = ({ name, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors?.[name]?.message;

  return (
    <textarea
      id="message"
      rows={4}
      className={`rounded-md border ${!!error ? 'border-error' : 'border-gray'} outline-0 p-2 w-full`}
      placeholder="Write your thoughts here..."
      {...register(name)}
      {...props}
    />
  );
};
