import { PATHS } from '@/helpers/constants';
import { ICompanyUserDetails } from '@/api/types';

const isInLoginPage = (pathname: string) => pathname === PATHS.SIGN_IN || pathname === PATHS.SIGN_UP;

export const isAuth = (pathname: string, user: ICompanyUserDetails | null) => user === null && isInLoginPage(pathname);
