import { Navigation } from './components/navigation';
import { navigationItems } from '@/helpers/constants';
import { Logo } from '@/components/logo';
import { LoginButtons } from '@/components/button/login-buttons';

export const UserHeader = () => {
  return (
    <header className="flex justify-between px-20 py-4 xs:flex xs:flex-col xs:px-0 xs:py-0 xs:items-center relative z-10 border-b border-[#1f82ff33]">
      <Logo />
      <div className="flex gap-8 items-center">
        <Navigation navigationItems={navigationItems} />
      </div>
      <LoginButtons />
    </header>
  );
};
