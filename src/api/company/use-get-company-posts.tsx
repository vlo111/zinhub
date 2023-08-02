import { useQuery, UseQueryResult } from '@tanstack/react-query';
import client from '../client';
import { AxiosResponse } from 'axios';
import { IData, IParam, Options, ReturnData } from '../types';

export const url = 'api/statements/all';

export const useGetCompanyPosts = (params: IParam, options?: Options): { data: IData; loading: boolean } => {
  const result = useQuery<AxiosResponse<ReturnData>, Error>(
    [url],
    () => client.post<ReturnData>(url, params),
    options
  );

  const { isSuccess, data, isInitialLoading } = result as UseQueryResult<IData, Error>;

  return { loading: isInitialLoading, data: isSuccess ? data : ({} as IData) };
};
