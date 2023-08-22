import { useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/admin/success-stories';

interface IParams {
  id: string 
}

const useUpdateStatusStory = (options = {}) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (params: IParams) => {
      await client.patch(`${url}/${params.id}`);
    },
    {
      onSuccess: () => {
        void queryClient.invalidateQueries(['api/admin/success-stories/all']);        
      },
      ...options,
    }
  );
};

export default useUpdateStatusStory;
