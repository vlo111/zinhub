interface IOptions {
    value: string
    label: string
}

export interface IFormData {
  applicationDeadline?: string;
  location?: string;
  phone?: string;
  program?: string;
  regionId?: IOptions;
  registrationLink?: string;
  startDate?: string;
  title?: string;
  whatWeOffer?: string;
}

export type OpenModalType = (data: IFormData) => void;
