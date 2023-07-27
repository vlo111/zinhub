import { default as Logo } from '@/components/icons/logo.svg';
import { usePathname, useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';

export const AuthHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isLoginPage = () => pathname === PATHS.SIGN_IN;

  const redirectTo = () => {
    if (isLoginPage()) router.push(PATHS.SIGN_UP);
    else router.push(PATHS.SIGN_IN);
  };

  return (
    <header className="flex justify-between px-20 py-4 xs:flex xs:flex-col xs:px-0 xs:py-0 xs:items-center relative z-10">
      <Logo />
      <button onClick={redirectTo} className="btn btn--footer">
        {isLoginPage() ? `Գրանցել ընկերություն` : `Մուտք`}
      </button>
    </header>
  );
};
