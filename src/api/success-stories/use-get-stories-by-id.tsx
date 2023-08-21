import { UseQueryResult, useQuery } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/admin/success-stories';

interface IData {
  result: {
    id: string;
    photo: string;
    story: string;
    successTitle: string;
  };
}

const useGetStoriesById = (id: string, options = { enabled: true }): { data: IData; isLoading: boolean } => {
  const result = useQuery([url, id], async () => await client.get(`${url}/${id}`), {
    retry: false,
    ...options,
  });
  const { data, isSuccess, isLoading } = result as UseQueryResult<IData, Error>;
  return {
    data: isSuccess ? data : ({} as IData),
    isLoading,
  };
};

export default useGetStoriesById;
