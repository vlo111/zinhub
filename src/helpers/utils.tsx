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

export const convertFileToBase64 = async (file: File): Promise<string | undefined> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result?.toString();
      if (base64String) {
        resolve(base64String);
      } else {
        reject(new Error('Error converting file to base64.'));
      }
    };
    reader.onerror = () => {
      reject(new Error('Error while reading the file.'));
    };
    reader.readAsDataURL(file);
  });
};
