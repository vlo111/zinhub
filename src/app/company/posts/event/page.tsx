'use client';
import { useGetCompanyPosts } from '@/api/company/use-get-company-posts';
import EventCard from './components/card';

export default () => {
  const { data, isLoading } = useGetCompanyPosts({ limit: 50, offset: 0, type: ['OTHER'] });

  return (
    <div className='flex flex-col gap-4'>
      {data.result?.map((event) => (
        <EventCard key={event.id} data={event} />
      ))}
    </div>
  );
};
