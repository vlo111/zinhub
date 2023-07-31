'use client';
import { Menu } from '@/components/menu';
import Image from 'next/image';
import { default as LocationSVG } from './components/icons/location.svg';
import { default as PhoneSVG } from './components/icons/phone.svg';
import { default as EmailSVG } from './components/icons/email.svg';
import Link from 'next/link';
import { PATHS } from '@/helpers/constants';
import { useGetProfile } from '@/app/company/profile/hooks/use-get-company-profile';
import React from 'react';
import { MenuItems } from '@/app/company/components/utils';

export default () => {
  const {
    company: {
      name,
      backgroundPhoto,
      location,
      numberOfEmployees,
      website,
      phone,
      email,
      creationDate,
      description,
      companyValues,
      photo,
    },
    loading,
  } = useGetProfile();
  if (loading) return <div>loading...</div>;

  return (
    <div className="mb-20">
      <div className="flex px-20 pt-10 gap-10 h-full lg:px-10 md:px-3 sm:px-3 xs:px-3 xs:flex-col">
        <Menu items={MenuItems} />
        <div className="bg-white w-full">
          <div className="w-full relative">
            <Image className="xs:h-[200px] xs:hidden" src={backgroundPhoto as string} alt="Picture of the company" />
            <div className="flex gap-4 mt-[-4rem] ml-10 sm:ml-0 md:ml-0 xs:ml-0 sm:flex-col md:flex-col xs:flex-col">
              <div className="flex justify-center bg-white items-center min-w-[12rem] h-[12rem] rounded border-[0.5px] border-gray sm:hidden md:hidden xs:hidden">
                <Image
                  width={192}
                  height={192}
                  className="object-cover h-[192px] rounded"
                  src={photo ?? ''}
                  alt="Company profile image"
                />
              </div>
              <div className="flex gap-10 pt-20 flex-col">
                <div className=" text-[1.25rem] text-davy-gray">{name}</div>
                <div className="flex flex-col gap-2">
                  <div className="text-davy-gray flex gap-2 items-center">
                    <LocationSVG />
                    <p>{location}</p>
                  </div>
                  <div className="text-davy-gray flex gap-2 items-center">
                    <PhoneSVG />
                    <p>{phone}</p>
                  </div>
                  <div className="text-davy-gray flex gap-2 items-center">
                    <EmailSVG />
                    <p>{email}</p>
                  </div>
                </div>
              </div>
              <div className="pt-20 ml-auto flex flex-col gap-10 min-w-1/3 sm:ml-0 md:ml-0 xs:ml-0 sm:py-6 md:py-6 xs:py-6">
                <Link className="btn btn--secondary" href={PATHS.COMPANY_PROFILE_UPDATE}>
                  Խմբագրել տվյալները
                </Link>
                <div className="flex flex-col gap-2">
                  <p>21 Ակտիվ հայտարարություն</p>
                  <p>{numberOfEmployees} Աշխատակից</p>
                  <p>Ընկերությունը ստեղծվել է՝ {`${new Date(creationDate).getFullYear()}`}թ․</p>
                  <Link target="_blank" href={website} title={website} className="text-primary-blue underline">
                    Վեբ կայք
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-10">
              <div className="text-davy-gray text-[1.25rem] font-bold">Ընկերության մասին</div>
              <span className="text-davy-gray">{description}</span>
            </div>
            <div className="flex flex-col gap-10">
              <div className="text-davy-gray text-[1.25rem] font-bold">Ընկերության Արժեքները</div>
              <span className="text-davy-gray">{companyValues}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
