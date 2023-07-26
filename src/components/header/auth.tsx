import { default as Logo } from '@/components/icons/logo.svg';
import { Navigation } from './navigation';
import { navigationItems } from '@/helpers/constants';

export const HomeHeader = () => {
  return (
    <header className="flex justify-between px-20 py-4 xs:flex xs:flex-col xs:px-0 xs:py-0 xs:items-center relative z-10 border-b border-[#1f82ff33]">
      <Logo />
      <div className="flex gap-8 items-center">
        <Navigation navigationItems={navigationItems} />
      </div>
    </header>
  );
};
