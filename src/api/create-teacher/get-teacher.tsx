import { UseQueryResult, useQuery } from '@tanstack/react-query';
import client from '../client';
import { ITableData } from '@/app/company/teacher/types';

export const url = 'api/teacher/all';

interface IData {
  count: number;
  has_more: boolean;
  result: ITableData[];
}

const useGetAllTeachers = (
  limit = 50,
  offset = 0,
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
export default useGetAllTeachers;
