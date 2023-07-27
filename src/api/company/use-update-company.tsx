import { useMutation } from '@tanstack/react-query';
import client from '../client';
import { ICompanyForm } from '@/types/forms';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';

const url = 'api/company/:id';

export const useUpdateCompanyProfile = () => {
  const router = useRouter();

  const mutation = useMutation<{ data: ICompanyForm }, unknown, ICompanyForm>({
    mutationFn: (values: ICompanyForm) => {
      const { name, description, regionId, numberOfEmployees, location, website, companyValues } = values;

      return client.put(url.replace(':id', values.id ?? ''), {
        name: name ?? undefined,
        description: description ?? undefined,
        regionId: regionId.value ?? undefined,
        numberOfEmployees: Number(numberOfEmployees) ?? 0,
        location: location ?? undefined,
        website: website ?? undefined,
        companyValues: companyValues ?? undefined,
      });
    },
    onSuccess: () => router.push(PATHS.COMPANY_PROFILE_PREVIEW),
  });
  return mutation;
};
