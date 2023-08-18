'use client';
import useGetPostById from '@/api/get-post';
import EventPreview from '@/app/company/posts/event/components/event_preview';

export default ({ params: { id } }: { params: { id: string } }) => {
  const { data } = useGetPostById(id);

  return <EventPreview status={data?.status} formData={data?.otherStatement} company={data?.company} />;
};
