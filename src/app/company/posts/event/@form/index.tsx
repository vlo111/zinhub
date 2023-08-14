'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import PostType from '../../components/checks';
import { useState } from 'react';
import GradientLine from '../../components/gradientLines';
import EventContent from '../components/event_content';
import EventPreview from '../components/event_preview';
import Modal from '@/components/modal';
import { OpenModalType } from '../types';
import { SubmitButton } from '../components/SubmitButton';
import CreatePosts from '@/api/create-post';
import GetSelectData from '@/api/statics';
import SuccessModalContent from '../../components/success-modal-content';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';

export type FormItems = {
  phone: string;
  email: string;
  address: string;
  about: string;
  value: string;
};

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [formData, setFortData] = useState({});
  const router = useRouter();

  const {
    data: { result },
  } = GetSelectData('OTHER');

  const { mutate: createPostsFn } = CreatePosts({
    onSuccess: () => {
      setIsOpenCreateModal(true);
    }
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
      type: 'OTHER',
      statementData: {
        title: data.courseName,
        applicationDeadline: data.applicationDeadline,
        location: data.location,
        registrationLink: data.email,
        startDate: data.startDate,
        phone: data.phone,
        program: data.program,
        whatWeOffer: data.whatWeOffer,
        regionId: data.regionId?.value,
      },
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <PostType />
      <GradientLine />
      <EventContent regions={result?.regions} />
      <SubmitButton openModal={openModal} />
      <Modal isOpen={isOpen} onClose={closeModal} width="90%">
        <EventPreview formData={formData} company={result?.company}/>
      </Modal>
      <Modal isOpen={isOpenCreateModal} onClose={closeCreateModal} width="40%" footer={false}>
        <SuccessModalContent onGoBack={onGoBack} onAddNewPost={onAddNewPost} />
      </Modal>
    </Form>
  );
};
