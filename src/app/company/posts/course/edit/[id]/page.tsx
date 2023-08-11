'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { SubmitButton } from '../SubmitButton';
import { Form } from '@/components/form';
import { IOptions } from '@/types/global';
import GetSelectData from '@/api/statics';
import useGetPostById from '@/api/get-post';
import AboutCourse from '../../components/about_course';
import GradientLine from '../../../components/gradientLines';
import Teacher from '../../components/teacher';
import Contacts from '../../components/contacts';
import Information from '../../components/Information';
import Modal from '@/components/modal';
import CourseDetails from '../../components/course_details';
import useUpdateSinglePost from '@/api/create-post/update-post';
import Button from '@/components/button';
import { default as EditBlackIcon } from '@/components/icons/edit-black.svg';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);

  const router = useRouter();
  const { id } = useParams();

  const {
    data: { result },
  } = GetSelectData('TRINING');
  const { data, isLoading } = useGetPostById(id, 'TRINING');
  const { mutate: updatePostById } = useUpdateSinglePost({
    onSuccess: () => {
      setIsOpenCreateModal(true);
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    
    const teachersArr = data.teacherIds.map((item: IOptions) => item.value);
    const topicsArr = data.topics.map((item: { name: string }) => item.name);
    updatePostById({
      id: id,
      statementData: {
        title: data.courseName,
        classHours: data.classHours,
        duration: data.duration,
        location: data.location,
        phone: data.phone,
        program: data.program,
        startDate: data.startDate,
        applicationDeadline: data.endDate,
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

  const openModal: SubmitHandler<FieldValues> = (data) => {
    setFormData({ ...data });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeCreateModal = () => {
    setIsOpenCreateModal(false);
    router.push('/company/posts/course');
  };

  const onGoBack = () => {
    router.push('/company/posts/course');
    setIsOpenCreateModal(false);
  };

  return (
    <>
      {!isLoading ? (
        <Form onSubmit={onSubmit} defaultValues={{ ...data?.trainingStatement }}>
           <div className='flex flex-row items-center text-sm font-bold gap-2 mb-4'>ՈւՍՈՒՑՈՒՄ<EditBlackIcon/></div>
          <GradientLine />
          <AboutCourse options={result?.filedOfStudy} />
          <Contacts options={result} />
          <GradientLine />
          <Information edit={true} />
          <GradientLine />
          <Teacher options={result?.teachers} edit={true} />
          <SubmitButton openModal={openModal} />
          <Modal isOpen={isOpen} onClose={closeModal} width="95%">
            <CourseDetails formData={formData} company={data.company}/>
          </Modal>
          <Modal isOpen={isOpenCreateModal} onClose={closeCreateModal} width="40%" footer={false}>
            <div className="flex items-center flex-col gap-11">
              <p className="w-[80%] text-lg font-medium text-davy-gray flex text-center">
                Ձեր հայտարարությունը հաջողությամբ խմբագրվել է
              </p>
              <div className="flex flex-row gap-4 items-center">
                <Button value="Վերադառնալ իմ էջ" type="secondary" onClick={onGoBack} />
              </div>
            </div>
          </Modal>
        </Form>
      ) : (
        <div>....Loading</div>
      )}
    </>
  );
};
