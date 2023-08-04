'use client';
import { useConfirmEmail } from '@/api/confirm-email/use-confirm-email';
import { useEffect } from 'react';
import { PATHS } from '@/helpers/constants';
import { useRouter } from 'next/navigation';

export default ({ searchParams: { token } }: { searchParams: { token: string } }) => {
  const router = useRouter();

  const { mutate } = useConfirmEmail();

  useEffect(() => {
    mutate({ token });
    router.push(PATHS.SIGN_IN);
  }, []);
};
