'use client';
import { ReactNode, useState } from 'react';
import { active_transition, transition } from '@/helpers/class-names';

const MODES = {
  INACTIVE: 'inactive',
  REJECTED: 'rejected',
};

const isActive = `${active_transition} border-b-2 text-primary-blue border-b-primary-blue`;

export default function MyComponent({ rejected, inactive }: { rejected: ReactNode; inactive: ReactNode }) {
  const [mode, setMode] = useState(MODES.INACTIVE);

  const inActiveClass = mode === MODES.INACTIVE ? `${isActive}` : '';

  const rejectedClass = mode === MODES.REJECTED ? `${isActive}` : '';

  return (
    <div className="h-full">
      <div className="h-12 pb-[1.3rem]">
        <div className="flex items-center gap-8 h-full mx-4 w-[11.5rem] border-b border-[#F0F0F0]">
          <div
            className={`cursor-pointer ${inActiveClass} ${transition('500')}`}
            onClick={() => setMode(MODES.INACTIVE)}
          >
            Ընթացիկ
          </div>
          <div
            className={`cursor-pointer ${rejectedClass} ${transition('500')}`}
            onClick={() => setMode(MODES.REJECTED)}
          >
            Մերժված
          </div>
        </div>
      </div>
      {mode === MODES.REJECTED ? rejected : inactive}
    </div>
  );
}
