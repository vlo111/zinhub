'use client';
import React from 'react';
import { useGetProfile } from '@/app/company/profile/hooks/use-get-company-profile';
import Form from '../components/form';

export default () => {
  const { company, loading } = useGetProfile();

  if (loading) return <div>loading...</div>;

  return (
    <div className="m-auto mt-10 mb-16 w-[90%]">
      <Form defaultValues={company} />
    </div>
  );
};
