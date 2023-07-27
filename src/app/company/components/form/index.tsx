'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import Header from '../header';
import { Form } from '@/components/form';
import { useAuth } from '@/providers/auth';
import { Items } from './items';

interface ICompanyForm {
  name: string;
  description: string;
  regionId: string;
  photo: string;
  backgroundPhoto: string;
  numberOfEmployees: number;
  creationDate: string;
  location: string;
  website: string;
  companyValues: string;
}

export default ({ id }: { id?: string }) => {
  const { user } = useAuth();

  // eslint-disable-next-line no-console
  console.log(user?.id);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line no-console
    console.log('Data - ', data, id);
  };

  return (
    <div className="m-auto mt-10 mb-16 w-[90%]">
      <Form<ICompanyForm> onSubmit={onSubmit}>
        <Header />
        <Items />
      </Form>
    </div>
  );
};
