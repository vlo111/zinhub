'use client';
import React from 'react';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';

export default () => {
  const router = useRouter();
  return (
    <div className="flex flex-col px-20 pt-10 gap-10 lg:px-10 md:px-3 sm:px-3 xs:px-3">
      <div className="flex w-full justify-end">
        <Button
          value={'+ Ավելացնել դասավանդող'}
          type="secondary"
          submit={false}
          onClick={() => router.push('/company/teacher/create')}
        />
      </div>
    </div>
  );
};
