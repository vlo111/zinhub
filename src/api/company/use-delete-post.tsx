import { useMutation } from '@tanstack/react-query';
import client from '../client';

const url = '/api/statements';

const useDeletePost = (options = {}) => {
    return useMutation(async (params: string) => {
    await client.delete(`${url}/${params}`);
  }, options);
};
export default useDeletePost;
