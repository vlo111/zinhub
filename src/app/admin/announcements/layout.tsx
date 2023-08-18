'use client';
import { ReactNode, useState } from 'react';

const MODES = {
  ALL: 'all',
  COURSE: 'course',
  WORK: 'work',
  OTHER: 'other',
};

const isActive = `border-b-2 text-primary-blue border-b-primary-blue`;

export default ({
  all,
  course,
  other,
  work,
  children,
}: {
  all: ReactNode;
  course: ReactNode;
  other: ReactNode;
  work: ReactNode;
  children: ReactNode;
}) => {
  const [mode, setMode] = useState(MODES.ALL);

  const allClass = mode === MODES.ALL ? `${isActive}` : '';

  const courseClass = mode === MODES.COURSE ? `${isActive}` : '';

  const workClass = mode === MODES.WORK ? `${isActive}` : '';

  const otherClass = mode === MODES.OTHER ? `${isActive}` : '';

  return (
    <div className="h-full">
      <div className="h-12 pb-[1.3rem]">
        <div className="flex items-center gap-8 h-full mx-4 w-[21.5rem] border-b border-[#F0F0F0]">
          <div className={`cursor-pointer ${allClass}`} onClick={() => setMode(MODES.ALL)}>
            Բոլորը
          </div>
          <div className={`cursor-pointer ${courseClass}}`} onClick={() => setMode(MODES.COURSE)}>
            Ուսուցում
          </div>
          <div className={`cursor-pointer ${workClass}}`} onClick={() => setMode(MODES.WORK)}>
            Աշխատանք
          </div>
          <div className={`cursor-pointer ${otherClass}}`} onClick={() => setMode(MODES.OTHER)}>
            Այլ
          </div>
        </div>
      </div>
      {mode === MODES.ALL
        ? all
        : mode === MODES.COURSE
        ? course
        : mode === MODES.WORK
        ? work
        : mode === MODES.OTHER
        ? other
        : children}
    </div>
  );
};
