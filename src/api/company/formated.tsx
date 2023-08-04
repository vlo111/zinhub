import { ICompanyForm } from '@/types/forms';

export const getUpdateCompanyFormatted = ({
  name,
  backgroundPhoto,
  photo,
  description,
  type,
  creationDate,
  regionId,
  numberOfEmployees,
  location,
  website,
  companyValues,
}: ICompanyForm) => ({
  name: name ?? undefined,
  type: type ?? undefined,
  creationDate,
  description: description ?? undefined,
  regionId: typeof regionId !== 'string' ? regionId?.value ?? undefined : regionId,
  numberOfEmployees: Number(numberOfEmployees) ?? 0,
  location: location ?? undefined,
  website: website ?? undefined,
  companyValues: companyValues ?? undefined,
  backgroundPhoto,
  photo,
});
