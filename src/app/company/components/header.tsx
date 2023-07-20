import CompanyURL from '@/app/company/components/icons/company-default-bg.png';
import { default as UploadBGSVG } from '@/app/company/components/icons/company-upload-bg.svg';
import { default as UploadSVG } from '@/app/company/components/icons/company-upload.svg';
import Image from 'next/image';

export default () => {
  return (
    <div className="w-full relative mb-32">
      <div className="flex gap-2 absolute right-2 top-2 bg-white p-3 rounded border-[0.5px] border-gray cursor-pointer">
        <UploadBGSVG />
        <span className="font-bold">Ավելացնել ետնանկար</span>
      </div>
      <Image className="xs:h-[200px]" src={CompanyURL} alt="Picture of the company" />
      <div className="flex items-end gap-4 absolute mt-[-6rem] ml-[3.75rem]">
        <div className="flex justify-center bg-white items-center w-[12rem] h-[12rem] rounded border-[0.5px] border-gray cursor-pointer">
          <UploadSVG />
        </div>
        <span className="text-sm text-davy-gray">Armenian Code Academy</span>
      </div>
    </div>
  );
};
