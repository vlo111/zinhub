import { HTMLProps } from 'react';

export default ({ type = 'primary', value, className, ...props }: HTMLProps<HTMLButtonElement>) => (
  <button
    {...props}
    className={`btn ${className} ${type === 'primary' ? 'btn--primary' : 'btn--secondary'}`}
    type="submit"
  >
    {value}
  </button>
);
