import { useMutation } from '@tanstack/react-query';
import client from '../client';
import { ICompanyForm } from '@/types/forms';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';
import { getUpdateCompanyFormatted } from '@/api/company/formated';

const url = 'api/company/:id';

export const useUpdateCompanyProfile = () => {
  const router = useRouter();

  const mutation = useMutation<{ data: ICompanyForm }, unknown, ICompanyForm>({
    mutationFn: (values: ICompanyForm) => {
      return client.put(url.replace(':id', values.id ?? ''), getUpdateCompanyFormatted(values));
    },
    onSuccess: () => router.push(PATHS.COMPANY_PROFILE),
  });
  return mutation;
};
