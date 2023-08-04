'use client';
import { default as ProfileLogo } from './icons/profile.svg';
import { useAuth } from '@/providers/auth';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';

export const HeaderProfile = ({ name }: { name: string }) => {
  const { logout } = useAuth();
  const router = useRouter();

  return (
    <div
      className="flex gap-2 items-center cursor-pointer"
      onClick={() => {
        logout();
        setTimeout(() => {
          router.push(PATHS.SIGN_IN);
        }, 100);
      }}
    >
      <p>{name}</p>
      <ProfileLogo />
    </div>
  );
};
