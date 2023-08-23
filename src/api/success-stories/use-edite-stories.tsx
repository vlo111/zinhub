import { useMutation } from '@tanstack/react-query';
import client from '../client';

export const url = 'api/admin/success-stories';

interface IStoriesData {
  photo: string | undefined;
  story: string;
  successTitle: string;
}

interface IParams {
  id: string;
  storiesData: IStoriesData;
}

const useUpdateStories = (options = {}) =>
  useMutation(async (params: IParams) => {
    await client.put(`${url}/${params.id}`, params.storiesData);
  }, options);
export default useUpdateStories;
