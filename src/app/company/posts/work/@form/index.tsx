'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { PATHS } from '@/helpers/constants';
import { SubmitButton } from '../components/SubmitButton';
import { OpenModalType } from '../types';
import { Form } from '@/components/form';
import GradientLine from '../../components/gradientLines';
import JobDetails from '../components/jobDetails';
import JobDescription from '../components/jobDesctiption';
import Modal from '@/components/modal';
import JobPreview from '../components/job_details';
import GetSelectData from '@/api/statics';
import CreatePosts from '@/api/posts/create';
import PostType from '../../components/checks';
import SuccessModalContent from '../../components/success-modal-content';

export type FormItems = {
  phone: string;
  email: string;
  address: string;
  about: string;
  value: string;
};

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFortData] = useState({});
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const router = useRouter();

  const {
    data: { result },
  } = GetSelectData('WORK');

  const { mutate: createPostsFn } = CreatePosts({
    onSuccess: () => {
      setIsOpenCreateModal(true);
    },
  });

  const openModal: OpenModalType = (data) => {
    setFortData({ ...data });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  const onAddNewPost = () => {
    router.push(PATHS.COURSE_CREATE);
    setIsOpenCreateModal(false);
  };

  const onGoBack = () => {
    router.push(PATHS.COMPANY_POSTS);
    setIsOpenCreateModal(false);
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
        responsibilities: data.responsibilities,
        skills: data.skills,
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
      <Modal isOpen={isOpen} onClose={closeModal} width="95%">
        <JobPreview formData={formData} company={result?.company} />
      </Modal>
      <Modal isOpen={isOpenCreateModal} onClose={closeCreateModal} width="40%" footer={false}>
        <SuccessModalContent onGoBack={onGoBack} onAddNewPost={onAddNewPost} />
      </Modal>
    </Form>
  );
};
