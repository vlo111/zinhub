import { default as EditedIcon } from '@/components/icons/edite.svg';
import { default as LocationIcon } from '@/components/icons/location.svg';
import Image from 'next/image';

export interface IData {
  id: string;
  status: string;
  companyPhoto: string;
  companyName: string;
  statementTitle: string;
  statementLocation: string;
  statementFiled: string;
  type: string;
}

const WorkCard: React.FC<{ data: IData }> = ({ data }) => {
  return (
    <div className="grid grid-cols-7 gap-4 w-full p-2 rounded-[10px] border-2 border-[#D2E6FF] hover:border-2 hover:border-primary-blue group">
      <div className="col-span-2">
        <Image
          width={192}
          height={192}
          className="xs:h-[200px] xs:hidden w-full h-[104px] object-cover"
          src={data.companyPhoto as string}
          alt="Picture of the company"
        />
      </div>
      <div className="flex gap-4 flex-col col-span-3">
        <p className="font-bold text-xs text-[#333]">{data.statementTitle}</p>
        <p className="text-primary-blue text-xs font-normal">{data.companyName}</p>
        <div className="flex flex-row gap-6">
          <p className="text-davy-gray text-xs font-normal flex flex-row gap-2">
            <LocationIcon /> {data.statementLocation}
          </p>
          <p className="text-davy-gray text-xs font-normal flex flex-row gap-2">{data.statementFiled}</p>
        </div>
      </div>
      <div className="flex flex-col content-between h-full justify-between col-span-2">
        <div className="flex align-center w-full justify-end gap-2">
          <button className="px-5 py-[10px] border border-primary-blue rounded-md">
            <EditedIcon />
          </button>
        </div>
        <div className="w-full flex justify-end">
          <button className="font-bold text-primary-blue hidden group-hover:block">Տեսնել ավելին</button>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
