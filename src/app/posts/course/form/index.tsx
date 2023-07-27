'use client';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import GradientLine from '../../components/gradientLines';
import Information from '../components/Information';
import Teacher from '../components/Teacher';
import Modal from '@/components/modal';
import { SubmitButton } from '../components/SubmitButton';
import { useState } from 'react';
import AboutCourse from '../components/about_course';
import CourseDetails from '../components/course_details';
import { OpenModalType } from '../types';
import GetSelectData from '@/api/statics';
import CreatePosts from '@/api/create_post';
import { IOptions } from '@/types/global';
import Contacts from '../components/contacts';

export default ({ id }: { id?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const {
    data: { result },
    isLoading,
  } = GetSelectData('COURSE');

  const { mutate: createPostsFn } = CreatePosts({
    onSuccess: (options: any) => {
      console.log(options, 'onSuccess');
    },
    onError: (e: {
      response: {
        data: { message: string };
      };
    }) => {
      console.log(e?.response?.data?.message, 'onError');
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line no-console
    console.log(data, 'Data - ');
    const teachersArr = data.teacherIds.map((item: IOptions) => item.value);
    const topicsArr = data.topics.map((item: { name: string }) => item.name);

    createPostsFn({
      type: 'TRINING',
      statementData: {
        ...data,
        filedStudyId: data.filedStudyId?.value,
        formatId: data.formatId?.value,
        languageId: data.languageId?.value,
        levelId: data.levelId?.value,
        regionId: data.regionId?.value,
        teacherIds: teachersArr,
        topics: topicsArr,
      },
    });
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
      <AboutCourse options={result?.filedOfStudy} />
      <Contacts options={result} />
      <GradientLine />
      <Information />
      <GradientLine />
      <Teacher options={result?.teachers} />
      <SubmitButton openModal={openModal} />
      <Modal isOpen={isOpen} onClose={closeModal}>
        <CourseDetails formData={formData} />
      </Modal>
    </Form>
  );
};
