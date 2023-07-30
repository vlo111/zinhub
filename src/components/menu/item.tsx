import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

export const MenuItem = ({
  item,
  icon,
  active,
  navigate,
}: {
  icon: ReactNode;
  item: string;
  active?: boolean;
  navigate: string;
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(navigate)}
      className={`w-full h-14 flex items-center gap-4 cursor-pointer hover:bg-primary-blue-light_hover border-white ${
        active ? 'border-2 border-r-primary-blue bg-primary-blue-light_hover' : ''
      }`}
    >
      {icon}
      <p>{item}</p>
    </div>
  );
};
