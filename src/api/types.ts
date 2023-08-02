export interface ISignInForm {
  email: string;
  password: string;
}

export interface ICompanyUserDetails {
  email: string;
  id: string;
  name: string;
  permission: string;
  role: string;
  status: string;
  accessToken?: string;
}

export interface ICompanyList {
  result: {
    id: string;
    name: string;
    location: string;
    backgroundPhoto: string;
    photo: string;
    createdAt: string;
  }[];
  count: number;
  hes_more: boolean;
}
