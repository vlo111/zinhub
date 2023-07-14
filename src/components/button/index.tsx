export type Props = {
  type?: 'primary' | 'secondary';
  value: string;
  className?: string;
};

export default ({ type = 'primary', value, className }: Props) => (
  <button className={`btn ${className} ${type === 'primary' ? 'btn--primary' : 'btn--secondary'}`} type="submit">
    {value}
  </button>
);
