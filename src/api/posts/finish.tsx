import { useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/statements';

interface IParams {
  id: string | undefined;
  formData: {
    participants: number;
    completedCourses: number;
  };
}

const useFinishedPost = (options = {}) => {
  const queryClient = useQueryClient();

  return useMutation(
    async (params: IParams) => {
      await client.patch(`${url}/${params.id}/finish`, params.formData);
    },
    {
      onSuccess: () => {
        void queryClient.invalidateQueries(['api/statements/all']);        
      },
      ...options,
    }
  );
};

export default useFinishedPost;
