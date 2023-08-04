'use client';
import useGetPostById from '@/api/get-post';
import EventPreview from '../components/event_preview';

export default ({ params: { id } }: { params: { id: string } }) => {
  const { data }: {data: any} = useGetPostById(id);

  return <EventPreview formData={data?.otherStatement} company={data?.company}/>;
};
