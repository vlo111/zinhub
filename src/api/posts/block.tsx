import { useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/statements';

interface IParams {
  id: string | undefined;
  formData: {
    rejectionText: string;
  };
}

const useBlockPost = (options = {}) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (params: IParams) => {
      await client.patch(`${url}/${params.id}/block`, params.formData);
    },
    {
      onSuccess: () => {
        void queryClient.invalidateQueries(['api/statements/all']);        
      },
      ...options,
    }
  );
};

export default useBlockPost;
