import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => {
  return <div>checkboxes {children}</div>;
};
