import { useMutation } from '@tanstack/react-query';
import { useAuth } from '@/providers/auth';
import { SignInForm, User } from '@/types/auth';

import client from '../client';
import { errorMessage } from '@/helpers/utils';

const url = 'auth/sign-in';

export const useSignIn = () => {
  const { login } = useAuth();
  return useMutation<User, unknown, SignInForm>({
    mutationFn: (values: SignInForm) => {
      return client.post(url, values);
    },
    onSuccess: (data) => {
      login({
        user: data.user,
        access_token: data.access_token,
      });
    },
    onError: errorMessage,
  });
};
