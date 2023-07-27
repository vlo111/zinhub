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
