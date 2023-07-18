import { BaseSyntheticEvent } from "react";

export type Props = {
  type?: 'primary' | 'secondary';
  value: string;
  className?: string;
  onClick?: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
};

export default ({ type = 'primary', value, className, ...props }: Props) => (
  <button {...props} className={`btn ${className} ${type === 'primary' ? 'btn--primary' : 'btn--secondary'}`} type="submit">
    {value}
  </button>
);
