'use client';
import useGetPostById from '@/api/get-post';
import CourseDetails from '@/app/company/posts/course/components/course_details';

export default ({ params: { id } }: { params: { id: string } }) => {
  const { data } = useGetPostById(id);

  return (
    <div>
      <CourseDetails formData={data?.trainingStatement} company={data?.company} />
    </div>
  );
};
