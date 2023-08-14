import { IOptionByGet } from "@/app/company/posts/course/types";

export interface IWorkData {
    additionalNotes: string;
    applicationDeadline: string;
    startDate?: string;
    description: string;
    duration: string;
    employment: IOptionByGet;
    filedWork: IOptionByGet;
    id: string;
    level: IOptionByGet;
    location: string;
    phone: string;
    region: IOptionByGet;
    registrationLink: string;
    responsibilities: string;
    salary: string;
    skills: string;
    title: string;
    whatWeOffer: string; 
}

export interface IOtherData {
  applicationDeadline: string;
  id: string;
  location: string;
  phone: string;
  program: string;
  region: IOptionByGet | undefined;
  registrationLink: string;
  startDate: string;
  title: string;
  whatWeOffer: string;
}