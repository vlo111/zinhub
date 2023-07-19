'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { SubmitButton } from '../../course/components/SubmitButton';
import GradientLine from '../../gradientLines';
import { Form } from '@/components/form';
import { useState } from 'react';
import JobDetails from '../components/jobDetails';
import JobDescription from '../components/jobDesctiption';
import Modal from '@/components/modal';
import JobPreview from '../components/job_details';

export type FormItems = {
  phone: string;
  email: string;
  address: string;
  about: string;
  value: string;
};

export default ({ id }: { id?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormItems>();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line no-console
    console.log('Data - ', data);
  };

  return (
    <Form onSubmit={onSubmit}>
      <GradientLine />
      <JobDetails/>
      <GradientLine />
      <JobDescription/>
      <SubmitButton openModal={openModal} />
      <Modal isOpen={isOpen} onClose={closeModal}>
        <JobPreview />
      </Modal>
    </Form>
  );
};
