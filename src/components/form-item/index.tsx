import React, { ReactNode } from 'react';

type Props = {
  label: string;
  children: ReactNode;
  error?: string;
};

const FormItem: React.FC<Props> = ({ label, children, error }) => {
  return (
    <div className="mb-3">
      <label className="block mb-1" htmlFor={label}>
        {label}:
      </label>
      {children}
      {error && <div className="text-error mt-1">{error}</div>}
    </div>
  );
};

export default FormItem;
