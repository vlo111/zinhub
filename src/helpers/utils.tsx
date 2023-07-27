import { PATHS } from '@/helpers/constants';
import { ICompanyUserDetails } from '@/api/types';

const isInLoginPage = (pathname: string) => pathname === PATHS.SIGN_IN || pathname === PATHS.SIGN_UP;

export const isAuth = (pathname: string, user: ICompanyUserDetails | null) => user === null && isInLoginPage(pathname);

export const formatPhoneNumber = (phoneNumber = '') => {
  const digitsOnly = phoneNumber.replace(/\D/g, '');

  const countryCode = digitsOnly.slice(0, 3);
  const areaCode = digitsOnly.slice(3, 5);
  const firstPart = digitsOnly.slice(5, 7);
  const secondPart = digitsOnly.slice(7, 9);
  const thirdPart = digitsOnly.slice(9);

  const formattedPhoneNumber = `+${countryCode} (${areaCode}) ${firstPart}-${secondPart}-${thirdPart}`;

  return formattedPhoneNumber;
};
