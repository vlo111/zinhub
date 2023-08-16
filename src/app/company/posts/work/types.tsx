import { IOptions } from '@/types/global';

interface IOptionsGet {
  id: string;
  title: string;
}

export interface IFormData {
  id?: string,
  additionalNotes?: string;
  applicationDeadline?: string;
  workDescription?: string;
  description?: string;
  duration?: string;
  employmentId?: IOptions;
  levelId?: IOptions;
  level?: IOptionsGet;
  location?: string;
  phone?: string;
  regionId?: IOptions;
  region?: IOptionsGet;
  registrationLink?: string;
  responsibilities?: string;
  salary?: string;
  skills?: string;
  title?: string;
  whatWeOffer?: string;
  companyName?: string;
  status?: string;
}

interface ICompany {
  id: string;
  photo: string;
  name: string;
}
export interface IJobPreview {
  formData: IFormData;
  company?: ICompany;
  status?: string;
  workId?: string;
}
export interface IAboutCompany {
  formData: IFormData;
  company?: ICompany;
  role?: string;
  workId?: string;
  openModal?: () => void;
  status: string | undefined;
}
export interface IJobContent {
  formData: IFormData;
}
export interface IJobDetailsSelectData {
  employment: IOptions[];
  filedOfWork: IOptions[];
  regions: IOptions[];
  workLevel: IOptions[];
}
export interface IJobDetails {
  options: IJobDetailsSelectData;
}

export type OpenModalType = (data: IFormData) => void;
