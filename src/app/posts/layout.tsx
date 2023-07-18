import { ReactNode } from 'react';
import PostType from './checks';
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
    // <div className='px-20 pt-10 pb-14'>
    //  <PostType />
    // </div>
  );
};
