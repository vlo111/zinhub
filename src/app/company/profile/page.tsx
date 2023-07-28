'use client';
import Form from '../components/form';
import React from 'react';
import Header from '@/app/company/components/header';
import { useGetProfile } from '@/app/company/hooks/use-get-company-profile';

export default () => {
  const { company, loading } = useGetProfile();

  if (loading) return <div>loading...</div>;

  return (
    <div className="m-auto mt-10 mb-16 w-[90%]">
      <Header />
      <Form defaultValues={company} />
    </div>
  );
};
