'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import GradientLine from '../../components/gradientLines';
import Contacts from '../components/contacts';
import Information from '../components/Information';
import Teacher from '../components/Teacher';
import Modal from '@/components/modal';
import { SubmitButton } from '../components/SubmitButton';
import { useState } from 'react';
import AboutCourse from '../components/about_course';
import CourseDetails from '../components/course_details';
import { OpenModalType } from '../types';

export default ({ id }: { id?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line no-console
    console.log('Data - ', data);
  };

  const openModal: OpenModalType = (data) => {
    setFormData({ ...data });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Form onSubmit={onSubmit}>
      <GradientLine />
      <AboutCourse />
      <Contacts />
      <GradientLine />
      <Information />
      <GradientLine />
      <Teacher />
      <SubmitButton openModal={openModal} />
      <Modal isOpen={isOpen} onClose={closeModal} >
        <CourseDetails formData={formData}/>
      </Modal>
    </Form>
  );
};
