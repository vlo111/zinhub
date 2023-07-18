'use client'
import { default as TrainingCenterIcon } from '@/components/icons/training-center-icon.svg';
import { default as EmployerIcon } from '@/components/icons/employer-icon.svg';
import { default as ConferenceRoomIcon } from '@/components/icons/conference-room-icon.svg';

const PostType = () => {

  return (
    <div className="flex flex-col border gap-6 border-primary-blue-light rounded-xl items-center content-center p-10 mb-14 ">
      <p className=" text-lg font-bold ">Տեղադրել հայտարարություն</p>
      <div className="flex flex-row gap-20 rounded-xl items-center content-center">
        <div className="flex flex-col gap-3 border border-primary-blue-light rounded-xl h-32 content-between p-4 flex-none w-72">
          <div className=" flex flex-row justify-between ">
            <TrainingCenterIcon />
            <input type="radio" value={1} />
          </div>
          <label  className="text-davy-gray text-sm md:text-xs">Ես ուսումնական կենտրոն եմ, առաջարկում եմ դասընթաց</label>
        </div>
        <div className="flex flex-col gap-3 border border-primary-blue-light rounded-xl h-32 content-between p-4 flex-none w-72">
          <div className=" flex flex-row justify-between ">
            <EmployerIcon />
            <input type="radio" value={2} />
          </div>
          <label className="text-davy-gray text-sm md:text-xs">Ես գործատու եմ, առաջարկում եմ աշխատանք</label>
        </div>
        <div className="flex flex-col gap-3 border border-primary-blue-light rounded-xl h-32 content-between p-4 flex-none w-72">
          <div className=" flex flex-row justify-between ">
            <ConferenceRoomIcon />
            <input type="radio" value={3} />
          </div>
          <label className="text-davy-gray text-sm md:text-xs">Ես ընկերություն եմ առաջարկում եմ միջոցառում-ծառայություն</label>
        </div>
      </div>
    </div>
  );
};

export default PostType;
