'use client';
import './index.css';
import { usePathname, useRouter } from 'next/navigation';
import { default as TrainingCenterIcon } from '@/components/icons/training-center-icon.svg';
import { default as EmployerIcon } from '@/components/icons/employer-icon.svg';
import { default as ConferenceRoomIcon } from '@/components/icons/conference-room-icon.svg';
import { useEffect, useState } from 'react';
import { PATHS } from '@/helpers/constants';

const PostType = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [checkRadio, setCheckRadio] = useState<number>(1);

  const onCheckRadio = (value: number): void => {
    setCheckRadio(value);
    if (value === 1) {
      router.push(PATHS.COURSE_CREATE);
    }
    if (value === 2) {
      router.push((PATHS.WORK_CREATE));
    }
    if (value === 3) {
      router.push(PATHS.EVENT_CREATE);
    }
  };

  useEffect(() => {
    if (pathname === PATHS.COURSE_CREATE) {
      setCheckRadio(1);
    }
    if (pathname === PATHS.WORK_CREATE) {
      setCheckRadio(2);
    }
    if (pathname === PATHS.EVENT_CREATE) {
      setCheckRadio(3);
    }
  }, []);

  return (
    <div className="flex flex-col border gap-6 border-primary-blue-light rounded-xl items-center content-center p-10 mb-14 w-full ">
      <p className=" text-lg font-bold ">Տեղադրել հայտարարություն</p>
      <div className="grid grid-cols-3 gap-4 xl:grid-flow-col rounded-xl items-center content-center">
        <div
          onClick={() => onCheckRadio(1)}
          className={checkRadio === 1 && pathname === PATHS.COURSE_CREATE ? 'checkCardChecked' : 'checkCard'}
        >
          <div className="cardTop ">
            <div className="flex flex-row gap-2">
              <TrainingCenterIcon />
              <div className="flex flex-row text-sm font-bold text-davy-gray">ՈւՍՈՒՑՈՒՄ</div>
            </div>
            <input type="radio" value={1} checked={checkRadio === 1 && pathname === PATHS.COURSE_CREATE} />
          </div>
          <label className="textStyle">Ես ուսումնական կենտրոն եմ, առաջարկում եմ դասընթաց</label>
        </div>
        <div
          onClick={() => onCheckRadio(2)}
          className={checkRadio === 2 && pathname === PATHS.WORK_CREATE ? 'checkCardChecked' : 'checkCard'}
        >
          <div className="cardTop">
            <div className="flex flex-row gap-2">
              <EmployerIcon />
              <div className="flex flex-row text-sm font-bold text-davy-gray">ԱՇԽԱՏԱՆՔ</div>
            </div>
            <input type="radio" value={2} checked={checkRadio === 2 && pathname === PATHS.WORK_CREATE} />
          </div>
          <label className="textStyle">Ես գործատու եմ, առաջարկում եմ աշխատանք</label>
        </div>
        <div
          onClick={() => onCheckRadio(3)}
          className={checkRadio === 3 && pathname === PATHS.EVENT_CREATE ? 'checkCardChecked' : 'checkCard'}
        >
          <div className="cardTop">
            <div className="flex flex-row gap-2">
              <ConferenceRoomIcon />
              <div className="flex flex-row text-sm font-bold text-davy-gray">ԱՅԼ</div>
            </div>
            <input type="radio" value={3} checked={checkRadio === 3 && pathname === PATHS.EVENT_CREATE} />
          </div>
          <label className="textStyle">Ես ընկերություն եմ առաջարկում եմ միջոցառում-ծառայություն</label>
        </div>
      </div>
    </div>
  );
};

export default PostType;
