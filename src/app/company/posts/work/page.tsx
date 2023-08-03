'use client';
import { useGetCompanyPosts } from '@/api/company/use-get-company-posts';
import WorkCard from './components/card';

export default () => {
  const { data } = useGetCompanyPosts({ limit: 50, offset: 0, type: ['WORK'] });

  return (
    <div className='flex flex-col gap-4'>
      {data.result?.map((work) => (
        <WorkCard key={work.id} data={work} />
      ))}
    </div>
  );
};
