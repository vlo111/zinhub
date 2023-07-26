interface IOptions {
  value: string;
  label: string;
}

export interface IFormData {
  additionalNotes?: string;
  applicationDeadline?: string;
  description?: string;
  duration?: string;
  employmentId?: IOptions;
  levelId?: IOptions;
  location?: string;
  phone?: string;
  regionId?: IOptions;
  registrationLink?: string;
  responsibilities?: string;
  salary?: string;
  skills?: string;
  title?: string;
  whatWeOffer?: string;
}
export interface IJobPreview {
    formData: IFormData
}
export interface IAboutCompany {
    formData: IFormData
}
export interface IJobContent {
    formData: IFormData
}

export type OpenModalType = (data: IFormData) => void;
