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
  photo: string;
  backgroundPhoto: string | File;
  numberOfEmployees: number;
  creationDate: string | Date;
  location: string;
  email: string;
  website: string;
  companyValues: string;
  backgroundPhotoItem: FileList;
  photoItem: FileList;
}
