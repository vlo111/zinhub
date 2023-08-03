'use client';
import { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import GradientLine from '../../components/gradientLines';
import Information from '../components/Information';
import Teacher from '../components/Teacher';
import Modal from '@/components/modal';
import { SubmitButton } from '../components/SubmitButton';
import AboutCourse from '../components/about_course';
import CourseDetails from '../components/course_details';
import { OpenModalType } from '../types';
import GetSelectData from '@/api/statics';
import CreatePosts from '@/api/create-post';
import { IOptions } from '@/types/global';
import Contacts from '../components/contacts';
import PostType from '../../components/checks';
import SuccessModalContent from '../../components/success-modal-content';
import { useRouter } from 'next/navigation';

export default ({ id }: { id?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const router = useRouter();

  const {
    data: { result },
  } = GetSelectData('TRINING');

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

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const teachersArr = data.teacherIds.map((item: IOptions) => item.value);
    const topicsArr = data.topics.map((item: { name: string }) => item.name);

    createPostsFn({
      type: 'TRINING',
      statementData: {
        title: data.courseName,
        classHours: data.classHours,
        duration: data.duration,
        location: data.location,
        phone: data.phone,
        program: data.program,
        startDate: data.startDate,
        description: data.courseDescription,
        registrationLink: data.email,
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

  return (
    <Form onSubmit={onSubmit}>
      <PostType />
      <GradientLine />
      <AboutCourse options={result?.filedOfStudy} />
      <Contacts options={result} />
      <GradientLine />
      <Information />
      <GradientLine />
      <Teacher options={result?.teachers} />
      <SubmitButton openModal={openModal} />
      <Modal isOpen={isOpen} onClose={closeModal} width="95%">
        <CourseDetails formData={formData} />
      </Modal>
      <Modal isOpen={isOpenCreateModal} onClose={closeCreateModal} width="40%" footer={false}>
        <SuccessModalContent onGoBack={onGoBack} onAddNewPost={onAddNewPost} />
      </Modal>
    </Form>
  );
};
