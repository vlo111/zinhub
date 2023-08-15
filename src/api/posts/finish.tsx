import { useMutation } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/statements';

interface IParams {
  id: string | undefined;
  formData: {
    participants: number;
    completedCourses: number;
  };
}

const useFinishedPost = (options = {}) =>
  useMutation(async (params: IParams) => {
    await client.patch(`${url}/${params.id}/finish`, params.formData);
  }, options);
export default useFinishedPost;
