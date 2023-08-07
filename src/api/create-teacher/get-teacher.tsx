import { useQuery } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/teacher/all';

const useGetAllTeachers = (search?: string, limit = 50, offset = 0, options = { enabled: true }) => {
  const result = useQuery([url, search, limit, offset], async () => await client.post(url, { search, limit, offset }), {
    select: (data) => data,
    ...options,
  });
  const { data, isSuccess, isLoading } = result;
  return {
    ...result,
    isLoading,
    data: isSuccess ? data : [],
  };
};
export default useGetAllTeachers;