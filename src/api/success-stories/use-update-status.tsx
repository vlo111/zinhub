import { useMutation } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/admin/success-stories';

interface IParams {
  id: string 
}

const useUpdateStatusStory = (options = {}) => {

  return useMutation(
    async (params: IParams) => {
      await client.patch(`${url}/${params.id}`);
    },
    {
      ...options,
    }
  );
};

export default useUpdateStatusStory;
