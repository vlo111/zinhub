'use client';
import { useMutation } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/statements';

const CreatePosts: any = (options = {}) =>
  useMutation(async (params: any) => {
    if (params.type !== undefined) {
      return await client.post(`${url}`, params);
    }
  }, options);
export default CreatePosts;