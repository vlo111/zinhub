'use client';
import { useMutation } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/admin/success-stories';

interface IParams {
  photo: string | undefined;
  story: string;
  successTitle: string;
}

const useCreateStories = (options = {}) =>
  useMutation(async (params: IParams) => {
    if (params.successTitle !== undefined) {
      return await client.post(`${url}`, params);
    }
  }, options);

export default useCreateStories;
