import { useMutation } from '@tanstack/react-query';
import client from '../client';

const url = '/api/teacher';

interface ITeacherData {
  experience: string;
  fullName: string;
  photo: string | undefined;
  profession: string;
  websites: { link: Array<{ url: string }> };
}

interface IParams {
  id: string;
  teacherData: ITeacherData;
}

const useUpdateSingleTeacher = (options = {}) =>
  useMutation(async (params: IParams) => {
    await client.put(`${url}/${params.id}`, params.teacherData);
  }, options);
export default useUpdateSingleTeacher;
