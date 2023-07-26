
export type Props = {
  type?: 'primary' | 'secondary';
  value: string;
  className?: string;
  onClick?: () => void;
};

export default ({ type = 'primary', value, className, ...props }: Props) => (
  <button {...props} className={`btn ${className} ${type === 'primary' ? 'btn--primary' : 'btn--secondary'}`} type="submit">
    {value}
  </button>
);
