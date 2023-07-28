'use client';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import { Items } from './items';
import { ICompanyForm } from '@/types/forms';
import { useUpdateCompanyProfile } from '@/api/company/use-update-company';

export default ({ defaultValues }: { defaultValues: ICompanyForm }) => {
  const { mutate: updateProfile } = useUpdateCompanyProfile();

  const onSubmit: SubmitHandler<ICompanyForm> = async (data) => updateProfile(data);

  return (
    <Form<ICompanyForm> onSubmit={onSubmit} defaultValues={defaultValues}>
      <Items />
    </Form>
  );
};
