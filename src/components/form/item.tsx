import React, { ReactNode } from 'react';

type Props = {
  label: string;
  children: ReactNode;
  error?: string;
};

const FormItem: React.FC<Props> = ({ label, children, error }) => {
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
