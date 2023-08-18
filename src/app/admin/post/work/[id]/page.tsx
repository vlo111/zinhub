'use client';
import useGetPostById from '@/api/get-post';
import JobPreview from '@/app/company/posts/work/components/job_details';

export default ({ params: { id } }: { params: { id: string } }) => {
  const { data } = useGetPostById(id);

  return (
    <div>
      <JobPreview status={data?.status} formData={data?.workStatement} company={data?.company} />
    </div>
  );
};
