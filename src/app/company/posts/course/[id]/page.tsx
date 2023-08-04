'use client';
import useGetPostById from '@/api/get-post';
import CourseDetails from '../components/course_details';

export default ({ params: { id } }: { params: { id: string } }) => {
  const { data }: { data: any } = useGetPostById(id);

  return (
    <div>
      <CourseDetails formData={data?.trainingStatement} company={data?.company} />
    </div>
  );
};
