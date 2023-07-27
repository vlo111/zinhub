'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import Header from '../header';
import { Form } from '@/components/form';
import { useAuth } from '@/providers/auth';
import { Items } from './items';
import { useGetCompany } from '@/api/company/use-get-company';
import { ICompanyForm } from '@/types/forms';

export default () => {
  const { user } = useAuth();

  const { company, loading } = useGetCompany(user?.id);

  if (loading) {
    return <div>Loading...</div>;
  }

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line no-console
    console.log('Data - ', data, user?.id);
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
