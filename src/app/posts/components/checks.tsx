'use client';
import './index.css';
import { usePathname, useRouter } from 'next/navigation';
import { default as TrainingCenterIcon } from '@/components/icons/training-center-icon.svg';
import { default as EmployerIcon } from '@/components/icons/employer-icon.svg';
import { default as ConferenceRoomIcon } from '@/components/icons/conference-room-icon.svg';
import { useEffect, useState } from 'react';

// import Link from 'next/link';

const PostType = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [checkRadio, setCheckRadio] = useState<number>(1);

  const onCheckRadio = (value: number): void => {
    setCheckRadio(value);
    if (value === 1) {
      router.push('/posts/course/create');
    }
    if (value === 2) {
      router.push('/posts/work/create');
    }
    if (value === 3) {
      router.push('/posts/event/create');
    }
  };

  useEffect(() => {
    if (pathname === '/posts/course/create') {
      setCheckRadio(1);
    }
    if (pathname === '/posts/work/create') {
      setCheckRadio(2);
    }
    if (pathname === '/posts/event/create') {
      setCheckRadio(3);
    }
  }, []);

  return (
    <div className="flex flex-col border gap-6 border-primary-blue-light rounded-xl items-center content-center p-10 mb-14 ">
      <p className=" text-lg font-bold ">Տեղադրել հայտարարություն</p>
      <div className="grid grid-cols-3 gap-4 xl:grid-flow-col rounded-xl items-center content-center">
        <div onClick={() => onCheckRadio(1)} className="checkCard">
          <div className="cardTop ">
            <TrainingCenterIcon />
            <input type="radio" value={1} checked={checkRadio === 1 && pathname === '/posts/course/create'} />
          </div>
          <label className="textStyle">Ես ուսումնական կենտրոն եմ, առաջարկում եմ դասընթաց</label>
        </div>
        <div onClick={() => onCheckRadio(2)} className="checkCard">
          <div className="cardTop">
            <EmployerIcon />
            <input type="radio" value={2} checked={checkRadio === 2 && pathname === '/posts/work/create'} />
          </div>
          <label className="textStyle">Ես գործատու եմ, առաջարկում եմ աշխատանք</label>
        </div>
        <div onClick={() => onCheckRadio(3)} className="checkCard">
          <div className="cardTop">
            <ConferenceRoomIcon />
            <input type="radio" value={3} checked={checkRadio === 3 && pathname === '/posts/event/create'} />
          </div>
          <label className="textStyle">
            Ես ընկերություն եմ առաջարկում եմ միջոցառում-ծառայություն
          </label>
        </div>
      </div>
    </div>
  );
};

export default PostType;
