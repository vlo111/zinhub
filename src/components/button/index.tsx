import { HTMLProps } from 'react';
interface IProps extends HTMLProps<HTMLButtonElement> {
  submit?: boolean;
}

export default ({ type = 'primary', value, className, submit = true, ...props }: IProps) => (
  <button
    {...props}
    className={`btn ${className} ${type === 'primary' ? 'btn--primary' : 'btn--secondary'}`}
    type={!!submit ? 'submit' : 'button'}
  >
    {value}
  </button>
);
