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
import CreatePosts from '@/api/create_post';
import GetSelectData from '@/api/statics';

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
  } = GetSelectData('OTHER');

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
    // eslint-disable-next-line no-console
    console.log('Data - ', data);
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
      <GradientLine />
      <EventContent regions={result?.regions}/>
      <SubmitButton openModal={openModal} />
      <Modal isOpen={isOpen} onClose={closeModal}>
        <EventPreview formData={formData} />
      </Modal>
    </Form>
  );
};
