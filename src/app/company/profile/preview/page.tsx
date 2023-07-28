import { Menu } from '@/components/menu';
import CompanyURL from '@/app/company/components/icons/company-default-bg.png';
import { default as ProfileSVG } from '@/app/company/components/icons/company-defailt-profile-bg.svg';
import Image from 'next/image';

export default () => {
  return (
    <div>
      <div className="flex px-20 pt-10 gap-10 h-full">
        <Menu />
        <div className="bg-white w-full">
          <div className="w-full relative">
            <Image className="xs:h-[200px]" src={CompanyURL} alt="Picture of the company" />
            <div className="flex gap-4">
              <div className="flex justify-center bg-white items-center w-[12rem] h-[12rem] rounded border-[0.5px] border-gray">
                <ProfileSVG />
              </div>
              <div>Info</div>
            </div>

            {/*<div className="flex items-end gap-4 absolute mt-[-6rem] ml-[3.75rem]">*/}
            {/*  <div className="flex justify-center bg-white items-center w-[12rem] h-[12rem] rounded border-[0.5px] border-gray">*/}
            {/*    <ProfileSVG />*/}
            {/*  </div>*/}
            {/*  <div className="flex flex-col">*/}
            {/*    <span className="text-sm text-davy-gray">Armenian Code Academy</span>*/}
            {/*    <span className="text-sm text-davy-gray">Armenian Code Academy</span>*/}
            {/*    <span className="text-sm text-davy-gray">Armenian Code Academy</span>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
