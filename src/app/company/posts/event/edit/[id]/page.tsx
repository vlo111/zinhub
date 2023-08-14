'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { Form } from '@/components/form';
import { SubmitButton } from '../SubmitButton';
import Modal from '@/components/modal';
import GetSelectData from '@/api/statics';
import GradientLine from '../../../components/gradientLines';
import EventContent from '../../components/event_content';
import EventPreview from '../../components/event_preview';
import useUpdateSinglePost from '@/api/create-post/update-post';
import { useParams } from 'next/navigation';
import useGetPostById from '@/api/get-post';
import Button from '@/components/button';
import { default as EditBlackIcon } from '@/components/icons/edit-black.svg';
import { PATHS } from '@/helpers/constants';

export type FormItems = {
  phone: string;
  email: string;
  address: string;
  about: string;
  value: string;
};

export default () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [formData, setFortData] = useState({});
  const router = useRouter();
  const { id } = useParams();

  const {
    data: { result },
  } = GetSelectData('OTHER');
  const { data, isLoading } = useGetPostById(id, 'OTHER');

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
    router.push(PATHS.COMPANY_EVENT);
  };

  const onGoBack = () => {
    router.push(PATHS.COMPANY_EVENT);
    setIsOpenCreateModal(false);
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {id: postId, email, courseName, regionId, ...rest } = data;

    updatePostById({
      id: id,
      statementData: {
        registrationLink: email,
        title: courseName,
        regionId: regionId?.value,
        ...rest,
      },
    });
  };

  return (
    <>
      {!isLoading ? (
        <Form onSubmit={onSubmit} defaultValues={data?.otherStatement}>
           <div className='flex flex-row items-center text-sm font-bold gap-2 mb-4'>ԱՅԼ<EditBlackIcon/></div>
          <GradientLine />
          <EventContent regions={result?.regions} />
          <SubmitButton openModal={openModal} />
          <Modal isOpen={isOpen} onClose={closeModal} width="95%">
            <EventPreview formData={formData} company={data.company}/>
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
