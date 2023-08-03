import { Menu } from '@/components/menu';
import React from 'react';
import { MenuItems } from '../components/utils';

export default () => {
  return (
    <div>
      <div className="flex px-20 pt-10 gap-10 h-full lg:px-10 md:px-3 sm:px-3 xs:px-3 xs:flex-col">
        <Menu items={MenuItems} />
        <div className="bg-white w-full flex flex-col">teacherrrrrrrrrrrr</div>
      </div>
    </div>
  );
};
