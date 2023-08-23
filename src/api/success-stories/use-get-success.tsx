import { UseQueryResult, useQuery } from '@tanstack/react-query';
import client from '../client';
import { IDataTableStories } from '@/app/admin/stories/page';

export const url = 'api/admin/success-stories/all';

interface IData {
  count: number;
  has_more: boolean;
  result: IDataTableStories[];
}

const useGetAllSuccessStories = (
  limit: number,
  offset: number,
  search?: string,
  options = { enabled: true }
): { isLoading: boolean; data: IData; refetch: () => Promise<UseQueryResult> } => {
  const result = useQuery<IData>(
    [url, search, limit, offset],
    async () => await client.post(url, { search, limit, offset }),
    {
      select: (data) => data,
      ...options,
    }
  );
  const { data, isSuccess, isLoading } = result;
  return {
    ...result,
    isLoading,
    data: isSuccess ? data : ({} as IData),
  };
};
export default useGetAllSuccessStories;
