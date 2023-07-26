'use client';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Form } from '@/components/form';
import { useState } from 'react';
import GradientLine from '../../components/gradientLines';
import EventContent from '../components/event_content';
import EventPreview from '../components/event_preview';
import Modal from '@/components/modal';
import { OpenModalType } from '../types';
import { SubmitButton } from '../components/SubmitButton';

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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormItems>();

  const openModal: OpenModalType = (data) => {
    setFortData({...data})
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
      <GradientLine/>
      <EventContent/>
      <SubmitButton openModal={openModal} />
      <Modal isOpen={isOpen} onClose={closeModal}>
        <EventPreview formData={formData}/>
      </Modal>
    </Form>
  );
};
