'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import { useState } from 'react';
import GradientLine from '../../components/gradientLines';
import EventContent from '../components/event_content';
import EventPreview from '../components/event_preview';
import Modal from '@/components/modal';
import { OpenModalType } from '../types';
import { SubmitButton } from '../components/SubmitButton';
import CreatePosts from '@/api/create-post';
import GetSelectData from '@/api/statics';
import PostType from '../../components/checks';
import SuccessModalContent from '../../components/success-modal-content';
import { useRouter } from 'next/navigation';

export type FormItems = {
  phone: string;
  email: string;
  address: string;
  about: string;
  value: string;
};

export default ({ id }: { id?: string }) => {
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
    },
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
  const closeCreateModal = () => {
    setIsOpenCreateModal(false);
  };

  const onAddNewPost = () => {
    router.push('/company/posts/course/create');
    setIsOpenCreateModal(false);
  };

  const onGoBack = () => {
    router.push('/company/posts');
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
      <Modal isOpen={isOpen} onClose={closeModal} width="95%">
        <EventPreview formData={formData} />
      </Modal>
      <Modal isOpen={isOpenCreateModal} onClose={closeCreateModal} width="40%" footer={false}>
        <SuccessModalContent onGoBack={onGoBack} onAddNewPost={onAddNewPost} />
      </Modal>
    </Form>
  );
};
