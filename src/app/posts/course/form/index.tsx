'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
// import Button from '@/components/button';
// import { Textarea } from '@/components/texarea';
// import { Input } from '@/components/input';
// import FormItem from '@/components/form/item';
// import PhoneNumberInput from '@/components/input/phone-number-input';
// import Grid from '../components/flex/grid';
// import Row from '../components/flex/row';
import GradientLine from '../../gradientLines';
import Contacts from '../components/contacts';
import Information from '../components/Information';
import Teacher from '../components/Teacher';
import Modal from '@/components/modal';
import { SubmitButton } from '../components/SubmitButton';
// import { ZSelect } from '@/components/select';
import { useState } from 'react';
import AboutCourse from '../components/about_course';
import CourseDetails from '../components/course_details';

export type FormItems = {
  courseName: string;

  phone: string;
  email: string;
  address: string;
  about: string;
  value: string;
};

export default ({ id }: { id?: string }) => {
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line no-console
    console.log('Data - ', data);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // const options = [
  //   { value: 'volvo', label: 'Volvo' },
  //   { value: 'saab', label: 'Saab' },
  //   { value: 'Saab', label: 'Mercedes' },
  //   { value: 'audi', label: 'Audi' },
  // ];

  return (
    <Form onSubmit={onSubmit}>
      <GradientLine />
      <AboutCourse/>
      <Contacts />
      <GradientLine />
      <Information />
      <GradientLine />
      <Teacher />
      <SubmitButton openModal={openModal} />
      <Modal isOpen={isOpen} onClose={closeModal}>
        <CourseDetails />
      </Modal>
    </Form>
  );
};
