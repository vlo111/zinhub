export interface ICompanyForm {
  id?: string;
  name: string;
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
  creationDate: string;
  location: string;
  email: string;
  website: string;
  companyValues: string;
}
