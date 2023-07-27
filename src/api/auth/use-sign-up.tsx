import { useMutation } from '@tanstack/react-query';

import client from '../client';
const url = 'api/auth/sign-up/company';

type CompanyUser = {
  taxAccount: string;
  companyName: string;
  phone: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export const useSignUp = (options = {}) => {
  const mutation = useMutation(({ taxAccount, companyName, phone, ...params }: CompanyUser) => {
    const company = {
      ...params,
      taxAccount: Number(taxAccount),
      name: companyName,
      phone: `+${phone.replace(/\D/g, '')}`,
    };
    return client.post(url, company);
  }, options);

  return mutation;
};
