import { HTMLProps } from 'react';

export type Props = {
  type?: 'primary' | 'secondary';
  value: string;
  className?: string;
  // onClick?: VoidFunction | ((e?: BaseSyntheticEvent<object> | undefined) => Promise<void>);
};

export default ({ type = 'primary', value, className, ...props }: HTMLProps<HTMLButtonElement>) => (
  <button
    {...props}
    className={`btn ${className} ${type === 'primary' ? 'btn--primary' : 'btn--secondary'}`}
    type="submit"
  >
    {value}
  </button>
);
