'use client';
import useGetPostById from '@/api/get-post';
import EventPreview from '../components/event_preview';

export default ({ params: { id } }: { params: { id: string } }) => {
  const { data } = useGetPostById(id);

  return <EventPreview eventId={data.id} formData={data?.otherStatement} status={data?.status} company={data?.company} />;
};
