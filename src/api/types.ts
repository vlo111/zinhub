import { UseQueryOptions } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

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

export interface IData {
  result: {
    id: string;
    status: string;
    companyPhoto: string;
    companyName: string;
    statementTitle: string;
    statementLocation: string;
    statementFiled: string;
    type: string;
  }[];
  count: number;
  has_more: boolean;
}

export type ReturnData = {
  data: IData;
};

export type Options = UseQueryOptions<AxiosResponse<ReturnData>, Error>;

export interface IParam {
  limit: number;
  offset: number;
  search?: string;
  type?: string[];
  regionIds?: string[];
  teacherIds?: string[];
  filedStudyIds?: string[];
  levelIds?: string[];
  languageIds?: string[];
  formatIds?: string[];
  filedWorkIds?: string[];
  employmentIds?: string[];
}
