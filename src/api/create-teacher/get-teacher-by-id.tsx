import { UseQueryResult, useQuery } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/teacher';

interface IData {
  result: {
    photo?: string;
    fullName?: string;
    companyId?: string;
    experience?: string;
    profession?: string;
    createdAt?: string;
    updatedAt?: string;
    photoItem?: string;
    websites?: { link: Array<{ url: string }> };
  };
}

const useGetTeacherById = (
  id: string,
  edit = false,
  options = { enabled: true }
): { data: IData; edit: boolean; isLoading: boolean } => {
  let editData = {};
  const result = useQuery([url, id], async () => await client.get(`${url}/${id}`), {
    retry: false,
    ...options,
  });
  const { data, isSuccess, isLoading } = result as UseQueryResult<IData, Error>;

  if (edit) {
    editData = {
      result: {
        ...data?.result,
        websites: data?.result?.websites?.link?.map((item) => item),
      },
    };
  }

  return {
    ...result,
    data: isSuccess ? (edit ? editData : data) : ({} as IData),
    isLoading,
  };
};

export default useGetTeacherById;
