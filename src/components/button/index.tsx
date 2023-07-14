export type Props = {
  type?: 'primary' | 'secondary';
  value: string;
};

export default ({ type = 'primary', value }: Props) => (
  <button className={`btn ${type === 'primary' ? 'btn--primary' : 'btn--secondary'}`} type="submit">
    {value}
  </button>
);
