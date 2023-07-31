import React from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import { Items } from './items';
import { ICompanyForm } from '@/types/forms';
import { useUpdateCompanyProfile } from '@/api/company/use-update-company';
import Header from '@/app/company/profile/components/header';
import { convertFileToBase64 } from '@/helpers/utils';

const CompanyProfileForm: React.FC<{ defaultValues: ICompanyForm }> = ({ defaultValues }) => {
  const { mutate: updateProfile } = useUpdateCompanyProfile();

  const onSubmit: SubmitHandler<ICompanyForm> = async (data) => {
    const backgroundPhoto = await convertFileToBase64(data.backgroundPhotoItem[0]);
    const photo = await convertFileToBase64(data.photoItem[0]);

    updateProfile({
      ...data,
      backgroundPhoto: backgroundPhoto ?? data.backgroundPhoto,
      photo: photo ?? data.photo,
    });
  };

  return (
    <Form<ICompanyForm> onSubmit={onSubmit} defaultValues={defaultValues}>
      <Header />
      <Items />
    </Form>
  );
};

export default CompanyProfileForm;
