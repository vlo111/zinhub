import { ITeacherOption } from '@/app/company/posts/course/types';

const TrainerCard: React.FC<{ teacher: ITeacherOption }> = ({ teacher }) => {
  return (
    <div className="border-[0.5px] border-[#DDEAEB] grid grid-cols-7 gap-8 rounded-[10px]">
      <div className="py-4 pl-4 col-span-2">
        <div>
          <p className="text-primary-blue font-bold text-xsl">{teacher?.fullName}</p>
          <p className="text-davy-gray text-sm">{teacher?.profession}</p>
        </div>
        <div></div>
      </div>
      <div className="py-4 flex flex-col gap-2 col-span-3">
        <p className="font-bold text-davy-gray">ԱՇԽԱՏԱՆՔԱՅԻՆ ՓՈՐՁ</p>
        <p className="text-davy-gray">{teacher?.description}</p>
      </div>
      <img src={teacher?.photo} className=' min-h-[200px] max-h-[260px] w-full col-span-2 rounded-lg' />
    </div>
  );
};

export default TrainerCard;
