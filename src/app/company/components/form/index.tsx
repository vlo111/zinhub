'use client';
import { SubmitHandler } from 'react-hook-form';
import Header from '../header';
import { Form } from '@/components/form';
import { useAuth } from '@/providers/auth';
import { Items } from './items';
import { useGetCompanyProfile } from '@/api/company/use-get-company-profile';
import { ICompanyForm } from '@/types/forms';
import { useUpdateCompanyProfile } from '@/api/company/use-update-company';

export default () => {
  const { user } = useAuth();

  const { mutate: updateProfile } = useUpdateCompanyProfile();

  const { company, loading } = useGetCompanyProfile(user?.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  const onSubmit: SubmitHandler<ICompanyForm> = async (data) => {
    updateProfile(data);
  };

  return (
    <div className="m-auto mt-10 mb-16 w-[90%]">
      <Form<ICompanyForm> onSubmit={onSubmit} defaultValues={company}>
        <Header />
        <Items />
      </Form>
    </div>
  );
};
