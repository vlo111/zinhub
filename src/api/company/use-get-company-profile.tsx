import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import client from '../client';
import { AxiosResponse } from 'axios';
import { formatPhoneNumber } from '@/helpers/utils';
import { ICompanyForm } from '@/types/forms';

export const GET_COMPANY = '/api/company/:id';

interface ICompany {
  id: string;
  name: string;
  description: string;
  phone: string;
  photo: string;
  type: string;
  backgroundPhoto: string;
  taxAccount: number;
  numberOfEmployees: number;
  creationDate: string;
  location: string;
  website: string;
  companyValues: string;
  region: {
    id: string;
    title: string;
  };
  regionId: string;
  user: {
    emailVerified: boolean;
    email: string;
  };
}

type ReturnData = {
  result: ICompany;
};

type Options = UseQueryOptions<AxiosResponse<ReturnData>, Error>;

export const useGetCompanyProfile = (id?: string, options?: Options): { company: ICompanyForm; loading: boolean } => {
  const urlNodes = GET_COMPANY.replace(':id', id || '');
  const result: UseQueryResult<AxiosResponse<ReturnData>, Error> = useQuery<AxiosResponse<ReturnData>, Error>(
    [urlNodes],
    () => client.get<ReturnData>(urlNodes),
    options
  );
  const { isSuccess, data, isInitialLoading } = result;

  const company = (data as AxiosResponse<ReturnData> & { result: ICompany })?.result;

  const returnData: ICompanyForm = {
    ...company,
    email: company?.user.email,
    regionId: { label: company?.region?.title, value: company?.region?.id },
    phone: formatPhoneNumber(company?.phone),
    creationDate: new Date(company?.creationDate),
  };

  return { loading: isInitialLoading, company: isSuccess ? returnData : ({} as ICompanyForm) };
};
