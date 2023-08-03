import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import client from '../client';
import { AxiosResponse } from 'axios';
export const GET_COMPANIES = 'api/company/all';

export type ICompanyList = {
  id: string;
  name: string;
  phone: string;
  status: string;
  taxAccount: string;
  createdAt: string;
};

interface IData {
  result: ICompanyList[];
  count: number;
  has_more: boolean;
}

type ReturnData = {
  data: IData;
};

type Options = UseQueryOptions<AxiosResponse<ReturnData>, Error>;

interface IParam {
  search?: string;
  statuses?: string[];
  orderBy?: {
    column: string;
    direction: string;
  };
  limit: number;
  offset: number;
}

export const useGetCompanyList = (params: IParam, options?: Options): { data: IData; loading: boolean } => {
  const result = useQuery<AxiosResponse<ReturnData>, Error>(
    [GET_COMPANIES + params.offset],
    () => client.post<ReturnData>(GET_COMPANIES, params),
    options
  );
  const { isSuccess, data, isInitialLoading } = result as UseQueryResult<IData, Error>;
  return { loading: isInitialLoading, data: isSuccess ? data : ({} as IData) };
};
