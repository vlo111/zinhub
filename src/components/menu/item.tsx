import { ReactNode } from 'react';

export const MenuItem = ({ item, icon, active }: { icon: ReactNode; item: string; active?: boolean }) => {
  return (
    <div
      className={`w-full h-14 flex items-center gap-4 cursor-pointer hover:bg-primary-blue-light_hover border-white ${
        active ? 'border-2 border-r-primary-blue bg-primary-blue-light_hover' : ''
      }`}
    >
      {icon}
      <p>{item}</p>
    </div>
  );
};
