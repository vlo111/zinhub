'use client';
import { useGetCompanyPosts } from '@/api/company/use-get-company-posts';
import React from 'react';
import CourseCard from './course/components/card';

export default () => {
  const { data } = useGetCompanyPosts({ limit: 50, offset: 0 });

  return (
    <div className="mb-20 flex flex-col gap-4">
      {data.result?.map((item) => (
        <CourseCard key={item.id} data={item} />
      ))}
    </div>
  );
};
