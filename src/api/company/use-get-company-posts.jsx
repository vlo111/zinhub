import { useQuery } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/statements/all';

const GetCompanyPosts = (param, options = { enabled: true }) => {
  const result = useQuery(
    [url, { ...param }],
    async () =>
      await client.post(url, {
        ...param,
      }),
    {
      select: (data) => data,
      ...options,
    }
  );
  console.log(result);
  const { data, isSuccess, isLoading } = result;
  return {
    ...result,
    isLoading,
    data: isSuccess ? data : [],
  };
};
export default GetCompanyPosts;

// import { UseQueryResult, useQuery } from '@tanstack/react-query';
// import client from '../client';
// import { IData } from '../types';
// import { AxiosResponse } from 'axios';

// export const url = 'api/statements/all';

// interface IResultPosts {
//   data: { count: number; has_more: boolean; result: IData[] };
//   isSuccess: boolean
//   isLoading: boolean
// }

// const GetCompanyPosts = (param, options = { enabled: true }) => {
//   const result:UseQueryResult<AxiosResponse<IResultPosts>, Error> = useQuery(
//     [url, { ...param }],
//     async () =>
//       await client.post(url, {
//         ...param,
//       }),
//     {
//       select: (data) => data,
//       ...options,
//     }
//   );
//   console.log(result);
//   const { data, isSuccess, isLoading } = result;
//   return {
//     ...result,
//     isLoading,
//     data: isSuccess ? data : [],
//   };
// };
// export default GetCompanyPosts;
