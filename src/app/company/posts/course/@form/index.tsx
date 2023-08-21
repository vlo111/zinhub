'use client';
import { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';
import { SubmitButton } from '../components/SubmitButton';
import { OpenModalType } from '../types';
import { IOptions } from '@/types/global';
import GradientLine from '../../components/gradientLines';
import Information from '../components/Information';
import Modal from '@/components/modal';
import AboutCourse from '../components/about_course';
import CourseDetails from '../components/course_details';
import GetSelectData from '@/api/statics';
import CreatePosts from '@/api/posts/create';
import Contacts from '../components/contacts';
import PostType from '../../components/checks';
import SuccessModalContent from '../../components/success-modal-content';
import Teacher from '@/app/company/posts/course/components/teacher';

export default () => {
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
    }
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
        applicationDeadline: data.endDate,
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
    router.push(PATHS.COURSE_CREATE);
    setIsOpenCreateModal(false);
  };

  const onGoBack = () => {
    router.push(PATHS.COMPANY_POSTS);
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
        <CourseDetails formData={formData} company={result?.company}/>
      </Modal>
      <Modal isOpen={isOpenCreateModal} onClose={closeCreateModal} width="40%" footer={false}>
        <SuccessModalContent onGoBack={onGoBack} onAddNewPost={onAddNewPost} />
      </Modal>
    </Form>
  );
};
