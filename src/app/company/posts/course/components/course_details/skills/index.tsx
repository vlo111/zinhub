import { default as CheckedIcon } from '@/components/icons/checked-icon.svg';
import { ISkills } from '../../../types';

const Skills: React.FC<ISkills> = ({ formData }) => {
  return (
    <div className="flex flex-col gap-6">
      <p className="text-[1.25rem] font-bold text-davy-gray">Ի՞նչ եք սովորելու</p>
      <div className="grid grid-cols-5 gap-2">
        {formData?.topics?.map((item, index) => (
          <div key={index} className="flex flex-row items-center gap-2 p-2 border border-secondary-orange rounded-md ">
            <CheckedIcon />
            <p className="text-xs text-davy-gray">{item?.name !== undefined ? item?.name : item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
