'use client';
import { ReactNode } from 'react';
import PostsHeader from './components/posts_header/Index';
import { MenuItems } from '../components/utils';
import { Menu } from '@/components/menu';
import { usePathname } from 'next/navigation';

type Props = {
  children: ReactNode;
};

export default ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <div>
      <div className="flex px-20 pt-10 gap-10 h-full lg:px-10 md:px-3 sm:px-3 xs:px-3 xs:flex-col">
        {pathname.includes('create') ? null : <Menu items={MenuItems} />}
        <div className="bg-white w-full flex flex-col">
          {pathname.includes('create') ? null : <PostsHeader />}
          {children}
        </div>
      </div>
    </div>
  );
};
