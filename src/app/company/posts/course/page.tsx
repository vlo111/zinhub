'use client';
import GetCompanyPosts from '@/api/company/use-get-company-posts';
import CourseCard from './components/card';

export default () => {
  const { data, isLoading } = GetCompanyPosts({ limit: 50, offset: 0, type: ['TRINING'] });

  return (
    <div className="flex flex-col gap-4">
      {data?.result?.map((course) => (
        <CourseCard key={course?.id} courseData={course} />
      ))}
    </div>
  );
};
