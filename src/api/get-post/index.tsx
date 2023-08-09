import { UseQueryResult, useQuery } from '@tanstack/react-query';
import client from '../client';
import { IFormData } from '@/app/company/posts/course/types';

export const url = 'api/statements';

interface ISelect {
  id: string;
  title: string;
}
interface IWorkData {
  additionalNotes: string;
  applicationDeadline: string;
  description: string;
  duration: string;
  employment: ISelect;
  filedWork: ISelect;
  id: string;
  level: ISelect;
  location: string;
  phone: string;
  region: ISelect;
  registrationLink: string;
  responsibilities: string;
  salary: string;
  skills: string;
  title: string;
  whatWeOffer: string;
}
interface IOtherData {
  applicationDeadline: string;
  id: string;
  location: string;
  phone: string;
  program: string;
  region: ISelect;
  registrationLink: string;
  startDate: string;
  title: string;
  whatWeOffer: string;
}

interface IData {
  company: { id: string; name: string; photo: string };
  id: string;
  otherStatement: IOtherData;
  status: string;
  trainingStatement: IFormData;
  workStatement: IWorkData;
}

const useGetPostById = (id: string, options = { enabled: true }): { data: IData; isLoading: boolean } => {
  const result = useQuery([url, id], async () => await client.get(`${url}/${id}`), {
    retry: false,
    ...options,
  });
  const { data, isSuccess, isLoading } = result as UseQueryResult<IData, Error>;

  return {
    ...result,
    data: isSuccess ? data : ({} as IData),
    isLoading,
  };
};

export default useGetPostById;
