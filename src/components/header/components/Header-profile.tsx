'use client';
import { default as ProfileLogo } from './icons/profile.svg';

export const HeaderProfile = ({ name }: { name: string }) => {
  return (
    <div className="flex gap-2 items-center cursor-pointer">
      {/*<p>{name}</p>*/}
      <ProfileLogo />
    </div>
  );
};
