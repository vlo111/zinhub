'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import GradientLine from '../../components/gradientLines';
import { Form } from '@/components/form';
import { useState } from 'react';
import JobDetails from '../components/jobDetails';
import JobDescription from '../components/jobDesctiption';
import Modal from '@/components/modal';
import JobPreview from '../components/job_details';
import { SubmitButton } from '../components/SubmitButton';
import { OpenModalType } from '../types';
import GetSelectData from '@/api/statics';
import CreatePosts from '@/api/create-post';
import PostType from '../../components/checks';

export type FormItems = {
  phone: string;
  email: string;
  address: string;
  about: string;
  value: string;
};

export default ({ id }: { id?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFortData] = useState({});

  const {
    data: { result },
  } = GetSelectData('WORK');

  const { mutate: createPostsFn } = CreatePosts({
    // onSuccess: (options: any) => {
    //   console.log(options, 'onSuccess');
    // },
    // onError: (e: {
    //   response: {
    //     data: { message: string };
    //   };
    // }) => {
    //   console.log(e?.response?.data?.message, 'onError');
    // },
  });

  const openModal: OpenModalType = (data) => {
    setFortData({ ...data });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    createPostsFn({
      type: 'WORK',
      statementData: {
        title: data.companyName,
        whatWeOffer: data.whatWeOffer,
        salary: data.salary,
        location: data.location,
        additionalNotes: data.additionalNotes,
        applicationDeadline: data.applicationDeadline,
        duration: data.duration,
        registrationLink: data.email,
        phone: data.phone,
        description: data.workDescription,
        employmentId: data.employmentId?.value,
        filedWorkId: data.filedWorkId?.value,
        levelId: data.levelId?.value,
        regionId: data.regionId?.value,
        responsibilities: { html: data.responsibilities },
        skills: { html: data.skills },
      },
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <PostType />
      <GradientLine />
      <JobDetails options={result} />
      <GradientLine />
      <JobDescription />
      <SubmitButton openModal={openModal} />
      <Modal isOpen={isOpen} onClose={closeModal}>
        <JobPreview formData={formData} />
      </Modal>
    </Form>
  );
};
