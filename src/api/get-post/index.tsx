import { useQuery } from '@tanstack/react-query';
import client from '../client';
// import { IGetCourseData } from '@/app/company/posts/course/types';

export const url = 'api/statements';

// interface IReturnData {
//     data: IGetCourseData | object,
//     isLoading: boolean
// }

// export type UseGetPostByIdType = (
//     id: string,
//     options?: {enabled: boolean}
//   ) => IReturnData;

const useGetPostById = (id: string, options = { enabled: true }) => {
  const result = useQuery([url, id], async () => await client.get(`${url}/${id}`), {
    retry: false,
    ...options,
  });
  const { data, isSuccess, isLoading } = result;
  
  return {
    ...result,
    data: isSuccess ? data : {},
    isLoading,
  };
};

export default useGetPostById;
