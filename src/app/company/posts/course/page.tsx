'use client';
import { useState } from 'react';
import { useGetCompanyPosts } from '@/api/company/use-get-company-posts';
import CourseCard from './components/card';
import PostsHeader from '../components/posts_header/Index';
import Pagination from '@/components/pagination';

export default () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { data } = useGetCompanyPosts({ limit: 10, offset: currentPage, type: ['TRINING'] });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="flex flex-col gap-4 mb-12">
      <PostsHeader />
      {data?.result?.map((course) => (
        <CourseCard key={course?.id} data={course} />
      ))}
      <Pagination offset={currentPage} count={data.count} onPageChange={handlePageChange} />
    </div>
  );
};
