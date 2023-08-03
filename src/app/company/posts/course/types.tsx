import { IOptions } from '@/types/global';

interface IDynamicForm {
  name: string;
}
export interface IFormData {
  classHours?: string;
  courseDuration?: string;
  courseDescription?: string;
  filedStudyId?: IOptions;
  formatId?: IOptions;
  languageId?: IOptions;
  levelId?: IOptions;
  location?: string;
  phone?: string;
  program?: string | undefined;
  regionId?: IOptions;
  email?: string;
  startDate?: string;
  courseName?: string;
  teacherId?: IOptions[];
  topics?: IDynamicForm[];
}

export interface ICourseDetails {
  formData: IFormData;
}
export interface ISkills {
  formData: IFormData;
}
export interface IProgram {
  formData: IFormData;
}
export interface IDetails {
  formData: IFormData;
}
export interface IAboutCourse {
  options: IOptions[];
}
export interface IContactsSelectData {
  courseFormat: IOptions[];
  courseLanguage: IOptions[];
  courseLevel: IOptions[];
  regions: IOptions[];
  teachers: IOptions[];
}
export interface IContacts {
  options: IContactsSelectData;
}

export interface ITeacherOption {
  id: string;
  fullName: string;
  profession: string;
  photo: string;
}

export interface ITeacher {
  options: ITeacherOption[];
}

export interface IDataPost {
  id: string;
  status: string;
  companyPhoto: string;
  companyName: string;
  statementTitle: string;
  statementLocation: string;
  statementFiled: string;
  type: string;
}

export type OpenModalType = (data: IFormData) => void;
