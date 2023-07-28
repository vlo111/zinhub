import { ReactNode } from 'react';

export const MenuItem = ({ item, icon }: { icon: ReactNode; item: string }) => {
  return (
    <div className="w-full h-14 flex items-center gap-4 cursor-pointer hover:bg-primary-blue-light_hover border-2 border-white hover:border-r-primary-blue">
      {icon}
      <p>{item}</p>
    </div>
  );
};
