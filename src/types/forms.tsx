export interface ICompanyForm {
  id?: string;
  name: string;
  type: string;
  description: string;
  regionId:
    | {
        value: string;
        label: string;
      }
    | string;
  phone: string;
  backgroundPhoto: string;
  numberOfEmployees: number;
  creationDate: string | Date;
  location: string;
  email: string;
  website: string;
  companyValues: string;
}
