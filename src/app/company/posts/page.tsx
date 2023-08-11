'use client';
import React, { useState } from 'react';
import { useGetCompanyPosts } from '@/api/company/use-get-company-posts';
import CourseCard from './course/components/card';
import PostsHeader from './components/posts_header/Index';
import Pagination from '@/components/pagination';
import WorkCard from './work/components/card';
import EventCard from './event/components/card';

export default () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { data } = useGetCompanyPosts({ limit: 10, offset: currentPage });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="mb-20 flex flex-col gap-4">
      <PostsHeader />
      {data.result?.map((item) => (
        <>
          {item?.type === 'WORK' ? (
            <WorkCard key={item.id} data={item} />
          ) : item.type === 'OTHER' ? (
            <EventCard key={item.id} data={item}/>
          ) : (
            <CourseCard key={item.id} data={item} />
          )}
        </>
      ))}
      <Pagination offset={currentPage} count={data.count} onPageChange={handlePageChange} />
    </div>
  );
};
