'use client';
import { useGetCompanyPosts } from '@/api/company/use-get-company-posts';
import EventCard from './components/card';
import PostsHeader from '../components/posts_header/Index';

export default () => {
  const { data } = useGetCompanyPosts({ limit: 50, offset: 0, type: ['OTHER'] });

  return (
    <div className='flex flex-col gap-4'>
      <PostsHeader />
      {data.result?.map((event) => (
        <EventCard key={event.id} data={event} />
      ))}
    </div>
  );
};
