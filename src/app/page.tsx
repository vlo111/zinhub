'use client';

import { useAuth } from '@/context/auth-context';
import { PATHS } from '@/helpers/constants';
import { redirect } from 'next/navigation';

export default function Home() {
  const { user } = useAuth();

  if (!user) {
    redirect(PATHS.SIGN_IN);
  }

  return (
    <main>
      <h1>Init</h1>
    </main>
  );
}
