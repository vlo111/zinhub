import { useQuery } from '@tanstack/react-query';
import client from '../client';
// import { IGetCourseData } from '@/app/company/posts/course/types';

export const url = 'api/statements';

// interface IReturnData {
//     data: IGetCourseData | object,
//     isLoading: boolean
// }

// export type UseGetPostByIdType = (
//     id: string,
//     options?: {enabled: boolean}
//   ) => IReturnData;

const useGetPostById = (id: string, edit = false, options = { enabled: true }) => {
  let editData = {};
  const result = useQuery([url, id], async () => await client.get(`${url}/${id}`), {
    retry: false,
    ...options,
  });
  const { data, isSuccess, isLoading } = result;

  console.log(data?.trainingStatement?.teachers.map((teacher) => {
    return {...teacher, value: teacher.id, label: teacher.fullName };
  }));
  
  if (edit) {
    editData = {
      ...data,
      trainingStatement: {
        courseName: data?.trainingStatement?.title,
        filedStudyId: {
          value: data?.trainingStatement?.filedStudy.id,
          label: data?.trainingStatement?.filedStudy.title,
        },
        courseDescription: data?.trainingStatement?.description,
        startDate: data?.trainingStatement?.startDate,
        duration: data?.trainingStatement?.duration,
        classHours: data?.trainingStatement?.classHours,
        levelId: { value: data?.trainingStatement?.level.id, label: data?.trainingStatement?.level.title },
        languageId: { value: data?.trainingStatement?.language.id, label: data?.trainingStatement?.language.title },
        formatId: { value: data?.trainingStatement?.format.id, label: data?.trainingStatement?.format.title },
        regionId: { value: data?.trainingStatement?.region.id, label: data?.trainingStatement?.region.title },
        location: data?.trainingStatement?.location,
        phone: data?.trainingStatement?.phone,
        email: data?.trainingStatement?.registrationLink,
        program: data?.trainingStatement?.program,
        topics: data?.trainingStatement?.topics.map((topic) => {
          return { name: topic };
        }),
        teacherIds: data?.trainingStatement?.teachers.map((teacher) => {
          return { value: teacher.id, label: teacher.fullName };
        }),
      },
    };
  }

  return {
    ...result,
    data: isSuccess ? (edit ? editData : data) : {},
    isLoading,
  };
};

export default useGetPostById;
