import { MenuItem } from '@/components/menu/item';
import { default as DataSvg } from './icons/data.svg';
import { default as ApplicationsSvg } from './icons/applications.svg';
import { default as AnnouncementSvg } from './icons/announcement.svg';

export const Menu = () => {
  return (
    <div className="w-1/3 bg-white flex flex-col gap-10">
      <div className="">search</div>
      <div className="h-full">
        <MenuItem item="Տվյալներ" icon={<DataSvg />} />
        <MenuItem item="Հայտարարություն" icon={<ApplicationsSvg />} />
        <MenuItem item="Դասավանդողներ" icon={<AnnouncementSvg />} />
      </div>
    </div>
  );
};
