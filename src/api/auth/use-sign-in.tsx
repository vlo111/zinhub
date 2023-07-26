import { useMutation } from '@tanstack/react-query';

import client from '../client';
import { useAuth } from '@/context/auth';
import { SignInForm, User } from '@/api/types';

const url = 'auth/sign-in';

export const useSignIn = () => {
  const { login } = useAuth();
  const mutation = useMutation<User, unknown, SignInForm>({
    mutationFn: (values: SignInForm) => {
      return client.post(url, values);
    },
    onSuccess: (data) => {
      login({
        user: data.user,
        token: data.access_token ?? '',
      });
    },
  });
  return mutation;
};
