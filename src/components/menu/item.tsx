import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { transition } from '@/helpers/class-names';

type Props = {
  icon: ReactNode;
  item: string;
  active?: boolean;
  navigate: string;
};

const itemClass = 'w-full h-14 flex items-center gap-4 cursor-pointer hover:bg-primary-blue-light_hover border-white';

export const MenuItem = ({ item, icon, active, navigate }: Props) => {
  const router = useRouter();

  const activeItem = active
    ? `border-2 border-r-primary-blue bg-primary-blue-light_hover -translate-y-1 scale-x-110`
    : '';

  return (
    <div onClick={() => router.push(navigate)} className={`${itemClass} ${activeItem} ${transition('1000')}`}>
      {icon}
      <p>{item}</p>
    </div>
  );
};
