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
        <MenuItem active={pathname === PATHS.COMPANY_PROFILE_PREVIEW} item="Տվյալներ" icon={<DataSvg />} />
        <MenuItem item="Հայտարարություն" icon={<ApplicationsSvg />} />
        <MenuItem item="Դասավանդողներ" icon={<AnnouncementSvg />} />
      </div>
    </div>
  );
};
