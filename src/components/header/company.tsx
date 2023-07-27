import { default as Logo } from '@/components/icons/logo.svg';
import { useAuth } from '@/providers/auth';
import { HeaderProfile } from '@/components/header/components/Header-profile';

export const CompanyHeader = () => {
  const { user } = useAuth();
  return (
    <header className="flex justify-between px-20 py-4 xs:flex xs:flex-col xs:px-0 xs:py-0 xs:items-center relative z-10 border-b border-[#1f82ff33]">
      <Logo />
      <HeaderProfile name={user?.name ?? ''} />
    </header>
  );
};
