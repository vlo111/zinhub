'use client';
import { useGetCompanyPosts } from '@/api/company/use-get-company-posts';
import EventCard from './components/card';
import PostsHeader from '../components/posts_header/Index';
import { useState } from 'react';
import Pagination from '@/components/pagination';

export default () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { data } = useGetCompanyPosts({ limit: 10, offset: currentPage, type: ['OTHER'] });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex flex-col gap-4 mb-12">
      <PostsHeader />
      {data.result?.map((event) => (
        <EventCard key={event.id} data={event} />
      ))}
      <Pagination offset={currentPage} count={data.count} onPageChange={handlePageChange} />
    </div>
  );
};
