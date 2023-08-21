'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { SubmitButton } from '../SubmitButton';
import { Form } from '@/components/form';
import { IOptions } from '@/types/global';
import { PATHS } from '@/helpers/constants';
import GetSelectData from '@/api/statics';
import useGetPostById from '@/api/get-post';
import AboutCourse from '../../components/about_course';
import GradientLine from '../../../components/gradientLines';
import Contacts from '../../components/contacts';
import Information from '../../components/Information';
import Modal from '@/components/modal';
import CourseDetails from '../../components/course_details';
import useUpdateSinglePost from '@/api/posts/update';
import Button from '@/components/button';
import Teacher from '@/app/company/posts/course/components/teacher';
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
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      id: postId,
      email,
      courseName,
      endDate,
      filedStudyId,
      courseDescription,
      regionId,
      formatId,
      languageId,
      levelId,
      topics,
      teacherIds,
      ...rest
    } = data;
    const teachersArr = teacherIds.map((item: IOptions) => item.value);
    const topicsArr = topics.map((item: { name: string }) => item.name);
    updatePostById({
      id: id,
      statementData: {
        title: courseName,
        applicationDeadline: endDate,
        description: courseDescription,
        registrationLink: email,
        filedStudyId: filedStudyId?.value,
        formatId: formatId?.value,
        languageId: languageId?.value,
        levelId: levelId?.value,
        regionId: regionId?.value,
        teacherIds: teachersArr,
        topics: topicsArr,
        ...rest,
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
    router.push(PATHS.COMPANY_COURSE);
  };

  const onGoBack = () => {
    router.push(PATHS.COMPANY_COURSE);
    setIsOpenCreateModal(false);
  };

  return (
    <>
      {!isLoading ? (
        <Form onSubmit={onSubmit} defaultValues={{ ...data?.trainingStatement }}>
          <div className="flex flex-row items-center text-sm font-bold gap-2 mb-4">
            ՈւՍՈՒՑՈՒՄ
            <EditBlackIcon />
          </div>
          <GradientLine />
          <AboutCourse options={result?.filedOfStudy} />
          <Contacts options={result} />
          <GradientLine />
          <Information edit={true} />
          <GradientLine />
          <Teacher options={result?.teachers} edit={true} />
          <SubmitButton openModal={openModal} />
          <Modal isOpen={isOpen} onClose={closeModal} width="95%">
            <CourseDetails formData={formData} company={data.company} />
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
