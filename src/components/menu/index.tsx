'use client';
import { MenuItem } from '@/components/menu/item';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

export const Menu = ({ items }: { items: { navigate: string; label: string; icon: ReactNode }[] }) => {
  const pathname = usePathname();

  return (
    <div className="w-1/3 bg-white flex flex-col gap-10 xs:w-full">
      <div className=""><input className='border border-davy-gray w-full rounded-md'/></div>
      <div className="h-full">
        {items.map(({ navigate, label, icon }) => (
          <MenuItem key={label} navigate={navigate} active={pathname.includes(navigate)} item={label} icon={icon} />
        ))}
      </div>
    </div>
  );
};
