'use client';
import useGetPostById from '@/api/get-post';
import JobPreview from '../components/job_details';

export default ({ params: { id } }: { params: { id: string } }) => {
  const { data } = useGetPostById(id);

  return (
    <div>
      <JobPreview workId={data?.id} formData={data?.workStatement} status={data?.status} company={data?.company} />
    </div>
  );
};
