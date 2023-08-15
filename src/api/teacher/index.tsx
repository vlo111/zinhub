'use client';
import { useMutation } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/teacher';

interface IParams {
  fullName: string;
  profession: string;
  experience: string;
  photo: string | undefined;
  websites: {
    link: Array<{ url: string }>;
  };
}

const useCreateTeacher = (options = {}) =>
  useMutation(async (params: IParams) => {
    if (params.fullName !== undefined) {
      return await client.post(`${url}`, params);
    }
  }, options);

export default useCreateTeacher;
