import { useMutation } from '@tanstack/react-query';
import client from '../client';
import { useAuth } from '@/providers/auth';
import { ICompanyUserDetails, ISignInForm } from '@/api/types';

const url = 'api/auth/sign-in';

type ReturnData = {
  result: ICompanyUserDetails;
};

export const useSignIn = () => {
  const { login } = useAuth();
  const mutation = useMutation<ReturnData, unknown, ISignInForm>({
    mutationFn: (values) => {
      return client.post(url, values);
    },
    onSuccess: ({ result }) => {
      login(result);
    },
  });
  return mutation;
};
