'use client';
import { useParams, useRouter } from 'next/navigation';
import useGetStoriesById from '@/api/success-stories/use-get-stories-by-id';
import Button from '@/components/button';
import { PATHS } from '@/helpers/constants';

export default () => {
  const { id } = useParams();
  const router = useRouter();

  const {
    data: { result },
  } = useGetStoriesById(id);

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="border-[0.5px] border-[#DDEAEB] grid grid-cols-3 gap-8 rounded-[10px]">
        <div className="flex flex-col py-4 pl-4 col-span-2 gap-4">
          <p className="text-davy-gray font-bold text-sm">{result?.successTitle}</p>
          <p className="text-davy-gray text-xs">{result?.story}</p>
        </div>
        <div>
          <img src={result?.photo} className=" min-h-[200px] max-h-[260px] w-full col-span-2 rounded-lg" />
        </div>
      </div>
      <div className="flex justify-end">
        <Button value={'Փակել'} submit={false} onClick={() => router.push(`${PATHS.ADMIN_STORIES}`)} />
      </div>
    </div>
  );
};
