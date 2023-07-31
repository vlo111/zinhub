import Button from '@/components/button';
import { default as EditedIcon } from '../../../../../components/icons/edite.svg';
import { default as LocationIcon } from '../../../../../components/icons/location.svg';
import { default as PhoneIcon } from '../../../../../components/icons/phone.svg';

const CourseCard = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full p-2 rounded-[10px] border-[0.5px] border-[#D2E6FF] hover:border-2 hover:border-primary-blue ">
      <div></div>
      <div className="flex gap-4 flex-col col-span-2">
        <p className="font-bold text-xs text-[#333]">Գրաֆիկ դիզայնի դասընթաց</p>
        <p className="text-primary-blue text-xs font-normal">Բիզնես Դեվելոփմենթ Գրուպ </p>
        <div className="flex flex-row gap-6">
          <p className="text-davy-gray text-xs font-normal flex flex-row gap-2">
            <LocationIcon /> 4 Hrachya Kochar St, Yerevan 0033
          </p>
          <p className="text-davy-gray text-xs font-normal flex flex-row gap-2">
            <PhoneIcon /> Օնլայն
          </p>
        </div>
      </div>
      <div className="flex flex-col content-between h-full justify-between">
        <div className="flex align-center w-full justify-end gap-2">
          <button className="px-5 py-[10px] border border-primary-blue rounded-md">
            <EditedIcon />
          </button>
          <Button value={'Ավարտել'} />
        </div>
        <div className="w-full flex justify-end">
          <button className="font-bold text-primary-blue">Տեսնել ավելին</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
