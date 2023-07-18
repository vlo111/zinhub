import { ReactNode } from 'react';
// import PostType from './checks';

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => {
  return (<>{children}</>
    // <div className='px-20 pt-10 pb-14'>
    //  <PostType />
    // </div>
  );
};
