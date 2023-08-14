'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import { SubmitButton } from '../SubmitButton';
import GetSelectData from '@/api/statics';
import GradientLine from '../../../components/gradientLines';
import JobDetails from '../../components/jobDetails';
import JobDescription from '../../components/jobDesctiption';
import useGetPostById from '@/api/get-post';
import useUpdateSinglePost from '@/api/create-post/update-post';
import Modal from '@/components/modal';
import JobPreview from '../../components/job_details';
import Button from '@/components/button';
import { default as EditBlackIcon } from '@/components/icons/edit-black.svg';
import { PATHS } from '@/helpers/constants';

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFortData] = useState({});
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const router = useRouter();
  const { id } = useParams();

  const {
    data: { result },
  } = GetSelectData('WORK');
  const { data: getByIdData, isLoading } = useGetPostById(id, 'WORK');
  const { mutate: updatePostById } = useUpdateSinglePost({
    onSuccess: () => {
      setIsOpenCreateModal(true);
    },
  });

  const openModal: SubmitHandler<FieldValues> = (data) => {
    setFortData({ ...data });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const closeCreateModal = () => {
    setIsOpenCreateModal(false);
    router.push(PATHS.COMPANY_WORK);
  };
  const onGoBack = () => {
    router.push(PATHS.COMPANY_WORK);
    setIsOpenCreateModal(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {id: postId, companyName, email, workDescription, employmentId, filedWorkId, levelId, regionId, ...rest } = data;

    updatePostById({
      id: id,
      statementData: {
        title: companyName,
        registrationLink: email,
        description: workDescription,
        employmentId: employmentId?.value,
        filedWorkId: filedWorkId?.value,
        levelId: levelId?.value,
        regionId: regionId?.value,
        ...rest,
      },
    });
  };

  return (
    <>
      {!isLoading ? (
        <Form onSubmit={onSubmit} defaultValues={{ ...getByIdData?.workStatement }}>
          <div className="flex flex-row items-center text-sm font-bold gap-2 mb-4">
            ԱՇԽԱՏԱՆՔ
            <EditBlackIcon />
          </div>
          <GradientLine />
          <JobDetails options={result} />
          <GradientLine />
          <JobDescription />
          <SubmitButton openModal={openModal} />
          <Modal isOpen={isOpen} onClose={closeModal} width="95%">
            <JobPreview formData={formData} company={getByIdData?.company} />
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
        <div>...Loading</div>
      )}
    </>
  );
};
