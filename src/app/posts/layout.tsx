import { ReactNode } from 'react';
import PostType from './components/checks';
// import PostType from './checks';

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => {
  return (
    <div className='p-20'>
      <PostType />
      {children}
    </div>
  );
};
