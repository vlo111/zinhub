'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface INavigationItem {
  label: string;
  href: string;
}
interface INavigationItemProps {
  navigationItems: INavigationItem[];
}

export const Navigation = ({ navigationItems }: INavigationItemProps) => {
  const pathname = usePathname();

  return (
    <>
      {navigationItems.map((navItem: INavigationItem) => {
        const isActive = pathname === navItem.href;
        return (
          <Link
            key={navItem.label}
            href={navItem.href}
            className={isActive ? 'text-davy-gray font-bold' : 'text-davy-gray'}
          >
            {navItem.label}
          </Link>
        );
      })}
    </>
  );
};
