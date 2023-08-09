import { IOptions } from '@/types/global';

interface IDynamicForm {
  name: string | undefined;
}
interface IOptionByGet {
  id: string;
  title: string | undefined;
}

export interface ITeacherOption {
  id: string;
  fullName: string;
  profession?: string;
  photo?: string;
  description?: string;
  websites?: { link: { url: string }[] };
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

export interface IFormData {
  classHours?: string;
  courseDuration?: string;
  description?: string | undefined;
  courseDescription?: string;
  filedStudyId?: IOptions;
  formatId?: IOptions;
  format?: IOptionByGet;
  languageId?: IOptions;
  language?: IOptionByGet;
  levelId?: IOptions;
  level?: IOptionByGet;
  location?: string;
  phone?: string;
  program?: string | undefined;
  regionId?: IOptions;
  region?: IOptionByGet;
  email?: string;
  startDate?: string;
  courseName?: string;
  title?: string | undefined;
  teacherIds?: ITeacherOption[];
  teachers?: ITeacherOption[] | undefined;
  topics?: IDynamicForm[] | Array<string>;
  duration?: string | undefined;
  filedStud?: {id: string, title: string}
}

export interface ICompany {
  id: string | undefined;
  name: string | undefined;
  photo: string | undefined;
}
export interface IGetCourseData {
  id?: string;
  status?: string;
  company: ICompany;
  trainingStatement: IFormData;
}
export interface ICourseDetails {
  formData: IFormData;
  company?: ICompany;
}
export interface ISkills {
  formData: IFormData;
}
export interface IProgram {
  formData: IFormData;
}
export interface IDetails {
  formData: IFormData;
  company?: ICompany;
  role?: string,
  openModal?: () => void
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

export interface ITeacher {
  options: ITeacherOption[];
  edit?: boolean
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
