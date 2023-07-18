import React, { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';

type Props = {
  label: string;
  name: string;
  children: ReactNode;
};

const FormItem: React.FC<Props> = ({ name, label, children }) => {
  const { formState: { errors } } = useFormContext();
  
  const error = errors?.[name]?.message as string;

  return (
    <div className="mb-3">
      <label className="block mb-1 text-item" htmlFor={label}>
        {label}
      </label>
      {children}
      {error && <div className="text-error font-semibold text-xss">{error}</div>}
    </div>
  );
};

export default FormItem;
