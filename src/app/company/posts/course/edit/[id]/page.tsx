'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { SubmitButton } from '../SubmitButton';
import { Form } from '@/components/form';
import GetSelectData from '@/api/statics';
import useGetPostById from '@/api/get-post';
import AboutCourse from '../../components/about_course';
import GradientLine from '../../../components/gradientLines';
import Teacher from '../../components/teacher';
import Contacts from '../../components/contacts';
import Information from '../../components/Information';
import Modal from '@/components/modal';
import CourseDetails from '../../components/course_details';
import SuccessModalContent from '../../../components/success-modal-content';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const router = useRouter();
  const { id } = useParams();

  const {
    data: { result },
  } = GetSelectData('TRINING');

  const { data, isLoading }: { data: any } = useGetPostById(id, true);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data, '<-------------data');
  };

  const openModal: SubmitHandler<FieldValues> = (data) => {
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
    <>
      {!isLoading ? (
        <Form onSubmit={onSubmit} defaultValues={{ ...data?.trainingStatement }}>
          <div>Armen</div>
          <GradientLine />
          <AboutCourse options={result?.filedOfStudy} />
          <Contacts options={result} />
          <GradientLine />
          <Information edit={true}/>
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
      ) : (
        <div>....Loading</div>
      )}
    </>
  );
};
