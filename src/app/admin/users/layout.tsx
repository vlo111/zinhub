'use client';
import { ReactNode, useState } from 'react';

const MODES = {
  ADMINS: 'admins',
  COMPANIES: 'companies',
};

const isActive = `border-b-2 text-primary-blue border-b-primary-blue`;

export default ({ admins, companies }: { admins: ReactNode; companies: ReactNode }) => {
  const [mode, setMode] = useState(MODES.ADMINS);

  const adminsClass = mode === MODES.ADMINS ? `${isActive}` : '';

  const companiesClass = mode === MODES.COMPANIES ? `${isActive}` : '';

  return (
    <div className="h-full">
      <div className="h-12 pb-[1.3rem]">
        <div className="flex items-center gap-8 h-full mx-4 w-[11.5rem] border-b border-[#F0F0F0]">
          <div className={`cursor-pointer ${adminsClass}`} onClick={() => setMode(MODES.ADMINS)}>
            Ընթացիկ
          </div>
          <div className={`cursor-pointer ${companiesClass}}`} onClick={() => setMode(MODES.COMPANIES)}>
            Մերժված
          </div>
        </div>
      </div>
      {mode === MODES.ADMINS ? admins : companies}
    </div>
  );
};
