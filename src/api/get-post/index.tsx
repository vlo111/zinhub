/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import client from '../client';
import { getOtherStatement, getTrainingStatement, getWorkStatement } from './formated';

export const url = 'api/statements';

// interface IData {
//   company: { id: string; name: string; photo: string };
//   id: string;
//   otherStatement: IOtherData;
//   status: string;
//   trainingStatement: IFormData;
//   workStatement: IWorkData;
// }

const useGetPostById = (id: string, edit = '', options = { enabled: true }): { data: any; isLoading: boolean } => {
  const result = useQuery([url, id], async () => await client.get(`${url}/${id}`), {
    retry: false,
    ...options,
  });
  const { data, isSuccess, isLoading } = result as UseQueryResult<any, Error>;

  let editData = { ...data };

  if (edit === 'TRINING') {
    editData = {
      trainingStatement: data?.trainingStatement ? getTrainingStatement(data?.trainingStatement) : {},
    };
  }
  if (edit === 'OTHER') {
    editData = {
      otherStatement: data?.otherStatement ? getOtherStatement(data?.otherStatement) : {},
    };
  }
  if (edit === 'WORK') {
    editData = {
      workStatement: data?.workStatement ? getWorkStatement(data?.workStatement) : {},
    };
  }

  return {
    ...result,
    data: isSuccess ? editData : ({} as any),
    isLoading,
  };
};

export default useGetPostById;
