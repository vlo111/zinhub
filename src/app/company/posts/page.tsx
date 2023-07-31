import { Menu } from '@/components/menu';
import React from 'react';
import { MenuItems } from '@/app/company/components/utils';
import CourseCard from './components/card';
import PostsHeader from './components/posts_header/Index';

export default () => {
  return (
    <div className="mb-20">
      <div className="flex px-20 pt-10 gap-10 h-full lg:px-10 md:px-3 sm:px-3 xs:px-3 xs:flex-col">
        <Menu items={MenuItems} />
        <div className="bg-white w-full flex flex-col gap-10">
          <PostsHeader/>
          <CourseCard/></div>
      </div>
    </div>
  );
};
