interface IOptions {
    value: string
    label: string
}
interface IGetOptions {
    id: string
    title: string
}

export interface IFormData {
  applicationDeadline?: string;
  location?: string;
  phone?: string;
  program?: string;
  regionId?: IOptions;
  region?: IGetOptions;
  registrationLink?: string;
  startDate?: string;
  courseName?: string;
  whatWeOffer?: string;
  title?: string 
}
export interface ICompany {
  id:string
  name: string
  photo: string
}

export type OpenModalType = (data: IFormData) => void;
