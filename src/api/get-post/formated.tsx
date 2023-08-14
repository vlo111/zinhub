import { IFormData, IOptionByGet } from '@/app/company/posts/course/types';
import { IOtherData, IWorkData } from './types';

const convertToOptions = (data: IOptionByGet | undefined) => {    
  return {
    value: data?.id,
    label: data?.title,
  };
};

export const getWorkStatement = ({
  employment,
  region,
  filedWork,
  level,
  title: companyName,
  applicationDeadline,
  registrationLink: email,
  description: workDescription,
  ...items
}: Partial<IWorkData>) => ({
  employmentId: convertToOptions(employment),
  regionId: convertToOptions(region),
  filedWorkId: convertToOptions(filedWork),
  levelId: convertToOptions(level),
  applicationDeadline: new Date(applicationDeadline ?? ''),
  companyName,
  email,
  workDescription,
  ...items,
});

export const getOtherStatement = ({
  region,
  title: courseName,
  applicationDeadline,
  startDate,
  registrationLink: email,
  ...items
}: Partial<IOtherData>) => ({
  regionId: convertToOptions(region),
  applicationDeadline: new Date(applicationDeadline ?? ''),
  startDate: new Date(startDate ?? ''),
  courseName,
  email,
  ...items,
});

export const getTrainingStatement = ({
  filedStudy,
  level,
  language,
  format,
  region,
  startDate,
  applicationDeadline,
  title: courseName,
  description: courseDescription,
  registrationLink: email,
  topics,
  teachers,
  ...items
}: Partial<IFormData>) => ({
  filedStudyId: convertToOptions(filedStudy),
  levelId: convertToOptions(level),
  languageId: convertToOptions(language),
  formatId: convertToOptions(format),
  regionId: convertToOptions(region),
  startDate: new Date(startDate ?? ''),
  endDate: new Date(applicationDeadline ?? ''),
  courseName,
  courseDescription,
  email,
  topics: topics?.map((topic) => {
    return { name: topic };
  }),
  teacherIds: teachers?.map((teacher) => {
    return { ...teacher, value: teacher.id, label: teacher.fullName };
  }),
  ...items,
});
