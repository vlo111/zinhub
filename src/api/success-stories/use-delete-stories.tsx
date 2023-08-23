import { useMutation } from '@tanstack/react-query';
import client from '../client';

const url = 'api/admin/success-stories';

const useDeleteStories = (options = {}) => {
  return useMutation(async (params: string) => {
    await client.delete(`${url}/${params}`);
  }, options);
};
export default useDeleteStories;
