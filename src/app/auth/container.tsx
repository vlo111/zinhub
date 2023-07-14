import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import { PATHS } from '@/helpers/constants';

export default ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <main className="flex flex-col items-center justify-center relative">
      <section className="flex flex-col gap-5 w-1/3 mt-4 xs:w-11/12 sm:w-1/2 md:w-2/5 2xl:ml-96 ">
        <h3 className="text-xl text-davy-gray xs:text-center text-title">
          {pathname === PATHS.SIGN_IN ? 'Մուտք' : 'Գրանցել կազմակերպություն'}
        </h3>
        {children}
      </section>
    </main>
  );
};
