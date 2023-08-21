import { ReactNode } from 'react';

export default ({ children }: { children: ReactNode }) => {
  return <div className="h-full">{children}</div>;
};
