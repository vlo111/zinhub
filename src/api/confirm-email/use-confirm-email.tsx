import { useMutation } from '@tanstack/react-query';
import client from '../client';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';

const url = 'api/auth/email/confirm';

export const useConfirmEmail = () => {
  const router = useRouter();

  const mutation = useMutation<{ data: { token: string } }, unknown, { token: string }>({
    mutationFn: (data: { token: string }) => {
      return client.post(url, data);
    },
    onSuccess: () => router.push(PATHS.COMPANY_PROFILE),
  });
  return mutation;
};
