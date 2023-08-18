'use client';
import useGetPostById from '@/api/get-post';
import CourseDetails from '../components/course_details';

export default ({ params: { id } }: { params: { id: string } }) => {
  const { data } = useGetPostById(id);

  return (
    <div>
      <CourseDetails status={data?.status} formData={data?.trainingStatement} company={data?.company} />
    </div>
  );
};
