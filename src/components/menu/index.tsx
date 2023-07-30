'use client';
import { MenuItem } from '@/components/menu/item';
import { default as DataSvg } from './icons/data.svg';
import { default as ApplicationsSvg } from './icons/applications.svg';
import { default as AnnouncementSvg } from './icons/announcement.svg';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/helpers/constants';

export const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="w-1/3 bg-white flex flex-col gap-10 xs:w-full">
      <div className="">search</div>
      <div className="h-full">
        <MenuItem
          navigate={PATHS.COMPANY_PROFILE}
          active={pathname === PATHS.COMPANY_PROFILE}
          item="Տվյալներ"
          icon={<DataSvg />}
        />
        <MenuItem
          navigate={PATHS.COMPANY_POSTS}
          active={pathname === PATHS.COMPANY_POSTS}
          item="Հայտարարություն"
          icon={<ApplicationsSvg />}
        />
        <MenuItem navigate={PATHS.ROOT} item="Դասավանդողներ" icon={<AnnouncementSvg />} />
      </div>
    </div>
  );
};
