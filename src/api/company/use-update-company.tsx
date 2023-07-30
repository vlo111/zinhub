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
      const { name, description, type, creationDate, regionId, numberOfEmployees, location, website, companyValues } =
        values;

      return client.put(url.replace(':id', values.id ?? ''), {
        name: name ?? undefined,
        type: type ?? undefined,
        creationDate,
        description: description ?? undefined,
        regionId: typeof regionId !== 'string' ? regionId?.value ?? undefined : regionId,
        numberOfEmployees: Number(numberOfEmployees) ?? 0,
        location: location ?? undefined,
        website: website ?? undefined,
        companyValues: companyValues ?? undefined,
      });
    },
    onSuccess: () => router.push(PATHS.COMPANY_PROFILE),
  });
  return mutation;
};
