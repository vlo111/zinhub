import { UseQueryResult, useQuery } from '@tanstack/react-query';
import client from '../client';
// import { IFormData } from '@/app/company/posts/course/types';

export const url = 'api/statements';

// interface ISelect {
//   id: string;
//   title: string;
// }
// interface IWorkData {
//   additionalNotes: string;
//   applicationDeadline: string;
//   description: string;
//   duration: string;
//   employment: ISelect;
//   filedWork: ISelect;
//   id: string;
//   level: ISelect;
//   location: string;
//   phone: string;
//   region: ISelect;
//   registrationLink: string;
//   responsibilities: string;
//   salary: string;
//   skills: string;
//   title: string;
//   whatWeOffer: string;
// }
// interface IOtherData {
//   applicationDeadline: string;
//   id: string;
//   location: string;
//   phone: string;
//   program: string;
//   region: ISelect;
//   registrationLink: string;
//   startDate: string;
//   title: string;
//   whatWeOffer: string;
// }

// interface IData {
//   company: { id: string; name: string; photo: string };
//   id: string;
//   otherStatement: IOtherData;
//   status: string;
//   trainingStatement: IFormData;
//   workStatement: IWorkData;
// }

const useGetPostById = (id: string, edit = '', options = { enabled: true }): { data: any; isLoading: boolean } => {
  let editData = {};
  const result = useQuery([url, id], async () => await client.get(`${url}/${id}`), {
    retry: false,
    ...options,
  });
  const { data, isSuccess, isLoading } = result as UseQueryResult<any, Error>;  

  if (edit === 'TRINING') {
    editData = {
      ...data,
      trainingStatement: {
        courseName: data?.trainingStatement?.title,
        filedStudyId: {
          value: data?.trainingStatement?.filedStudy.id,
          label: data?.trainingStatement?.filedStudy.title,
        },
        courseDescription: data?.trainingStatement?.description,
        startDate: new Date(data?.trainingStatement?.startDate),
        endDate: new Date(data?.trainingStatement?.applicationDeadline),
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
        topics: data?.trainingStatement?.topics.map((topic: string) => {
          return { name: topic };
        }),
        teacherIds: data?.trainingStatement?.teachers.map((teacher: any) => {
          return { ...teacher, value: teacher.id, label: teacher.fullName };
        }),
      },
    };
  }
  if (edit === 'OTHER') {
    editData = {
      ...data,
      otherStatement: {
        courseName: data?.otherStatement?.title,
        applicationDeadline: new Date(data?.otherStatement?.applicationDeadline),
        startDate: new Date(data?.otherStatement?.startDate),
        phone: data?.otherStatement?.phone,
        location: data?.otherStatement?.location,
        regionId: { value: data?.otherStatement?.region?.id, label: data?.otherStatement?.region.title },
        email: data?.otherStatement?.registrationLink,
        program: data?.otherStatement?.program,
        whatWeOffer: data?.otherStatement?.whatWeOffer,
      },
    };
  }
  if (edit === 'WORK') {
    editData = {
      ...data,
      workStatement: {
        companyName: data?.workStatement?.title,
        filedWorkId: { value: data?.workStatement?.filedWork.id, label: data?.workStatement?.filedWork.title },
        applicationDeadline: data?.workStatement?.applicationDeadline,
        duration: data?.workStatement?.duration,
        levelId: { value: data?.workStatement?.level.id, label: data?.workStatement?.level.title },
        location: data?.workStatement?.location,
        salary: data?.workStatement?.salary,
        employmentId: { value: data?.workStatement?.employment.id, label: data?.workStatement?.employment.title },
        regionId: { value: data?.workStatement?.region.id, label: data?.workStatement?.region.title },
        email: data?.workStatement?.registrationLink,
        phone: data?.workStatement?.phone,
        workDescription: data?.workStatement?.description,
        responsibilities: data?.workStatement?.responsibilities,
        skills: data?.workStatement?.skills,
        additionalNotes: data?.workStatement?.additionalNotes,
        whatWeOffer: data?.workStatement?.whatWeOffer,
      },
    };
  }

  return {
    ...result,
    data: isSuccess ? edit ? editData : data : ({} as any),
    isLoading,
  };
};

export default useGetPostById;
