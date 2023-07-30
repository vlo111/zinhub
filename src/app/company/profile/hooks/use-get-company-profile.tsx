'use client';
import { useAuth } from '@/providers/auth';
import { useGetCompanyProfile } from '@/api/company/use-get-company-profile';

export const useGetProfile = () => {
  const { user } = useAuth();

  const { company, loading } = useGetCompanyProfile(user?.id, { enabled: !!user?.id });

  return { company, loading };
};
