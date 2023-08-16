'use client';
import { useState } from 'react';
import { useAuth } from '@/providers/auth';
import { useParams, useRouter } from 'next/navigation';
import { ICompany, IFormData } from '../../types';
import Modal from '@/components/modal';
import GradientLine from '../../../components/gradientLines';
import InfoItem from '../../../components/items';
import TextContent from '../../../components/text-content';
import Button from '@/components/button';
import useDeletePost from '@/api/company/use-delete-post';
import { default as EditedIcon } from '@/components/icons/edite.svg';
import { default as DeletedIcon } from '@/components/icons/deleted-red.svg';
import { default as SuccessIcon } from '@/components/icons/success.svg';
import { PATHS } from '@/helpers/constants';
import { SubmitHandler } from 'react-hook-form';
import ApplicantsCount from '../applicants-count';
import SuccessModalFinish from '../../../components/success-finish-modal';
import useFinishedPost from '@/api/posts/finish';
import { IFormDAtaModal } from '../../../course/types';
import { useQueryClient } from '@tanstack/react-query';

const button = 'border py-2 px-4 flex flex-row items-center gap-2 rounded-md text-sm';

const EventPreview: React.FC<{eventId?: string; status?: string; formData: IFormData; company?: ICompany }> = ({
  status,
  formData,
  company,
  eventId,
}) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false);
  const [openParticipantsCount, setOpenParticipantsCount] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const queryClient = useQueryClient();
  const { role } = useAuth();
  const { id } = useParams();
  const router = useRouter();

  const { mutate: finishedPostById } = useFinishedPost({
    onSuccess: () => {
      setOpenSuccessModal(true);
      setOpenParticipantsCount(false);
        void queryClient.invalidateQueries(['api/statements/all']);        

    },
  });

  const { mutate: deletePostById } = useDeletePost({
    onSuccess: () => {
      setOpenConfirmDeleteModal(true);
    },
  });

  const closeModal = () => {
    setIsOpenDeleteModal(false);
  };
  const openDeleteModal = () => {
    setIsOpenDeleteModal(true);
  };

  const oncloseConfirmModal = () => {
    setOpenConfirmDeleteModal(false);
  };
  const onCloseParticipantsCount = () => {
    setOpenParticipantsCount(false);
  };
  const onCloseSuccessModalFinish = () => {
    setOpenSuccessModal(false);
  };

  const onGoBack = () => {
    setOpenSuccessModal(false);
    router.push('/company/posts/event')
  };

  const onSubmit: SubmitHandler<IFormDAtaModal> = (data) => {    
    finishedPostById({
      id: eventId,
      formData: {
        participants: +data.participants,
        completedCourses: +data.completedCourses,
      },
    });
  };

  return (
    <div className="w-full">
      <div className="flex-col w-full grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-4 col-span-2 ">
          <div className="flex flex-row gap-4">
            <img src={company?.photo} className="w-60 h-52 rounded-md border border-gray" />
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium">
                {formData?.courseName !== undefined ? formData?.courseName : formData?.title}
              </p>
              <p className="text-xs font-normal first-letter text-primary-blue">{company?.name}</p>
              {role === 'COMPANY' ? (
                <div className="flex flex-row gap-2 flex-wrap">
                  {status === 'ACTIVE' ? (
                    <>
                      <button
                        className={`${button} border-primary-blue text-primary-blue`}
                        onClick={() => router.push(`${PATHS.EVENT_EDIT}/${id}`)}
                      >
                        <EditedIcon /> Խմբագրել
                      </button>
                      <button className={`${button} border-error text-error`} onClick={openDeleteModal}>
                        <DeletedIcon />
                        Ջնջել
                      </button>
                    </>
                  ) : null}
                  {status === 'ACTIVE' || status === 'INACTIVE' ? (
                    <Button value={'Ավարտել'} onClick={() => setOpenParticipantsCount(true)} />
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full p-8 bg-light-blue gap-4 rounded-md min-w-[400px]">
          <p className="text-lg font-bold">Դասընթացի մանրամասները</p>
          <div className="flex flex-col gap-2">
            <InfoItem
              label={'Գտնվելու վայրը  (Մարզ)'}
              value={formData?.regionId !== undefined ? formData?.regionId?.label : formData?.region?.title ?? ''}
            />
            <InfoItem label={'Հասցե'} value={formData?.location ?? ''} />
            <InfoItem label={'Հեռախոս'} value={formData?.phone ?? ''} />
            <GradientLine />
            <InfoItem
              label={'Դիմելու վերջնաժամկետ'}
              value={new Date(formData?.applicationDeadline ?? '').toLocaleDateString() ?? ''}
            />
            <InfoItem label={'Անցկացման օր'} value={new Date(formData?.startDate ?? '').toLocaleDateString() ?? ''} />
          </div>
        </div>
      </div>
      <div className=" flex flex-col w-[60%] gap-14">
        <TextContent title="Ծրագիր" description={formData?.program} />
        <TextContent title="Ի՞նչ ենք մենք առաջարկում (Ընկերության մասին)" description={formData?.whatWeOffer} />
      </div>
      <Modal isOpen={isOpenDeleteModal} onClose={closeModal} width={'40%'} footer={false}>
        <div className="flex items-center flex-col gap-11">
          <p className="w-[80%] text-lg font-medium text-davy-gray flex text-center">
            Համոզվա՞ծ եք, որ ցանկանում եք հեռացնել Ձեր հայտարարությունը
          </p>
          <div className="flex flex-row gap-4">
            <Button value="Չեղարկել" type="secondary" onClick={() => setIsOpenDeleteModal(false)} />
            <Button
              value="Հաստատել"
              onClick={() => {
                deletePostById(id);
                setIsOpenDeleteModal(false);
              }}
            />
          </div>
        </div>
      </Modal>
      <Modal isOpen={openConfirmDeleteModal} onClose={oncloseConfirmModal} width={'40%'} footer={false}>
        <div className="flex items-center flex-col gap-11">
          <SuccessIcon />
          <p className="w-[80%] text-lg font-medium text-davy-gray flex text-center">
            Դասընթացավարը հաջողությամբ հեռացվել է
          </p>
          <div className="flex flex-row gap-4">
            <Button
              value="Վերադառնալ իմ էջ"
              type="secondary"
              onClick={() => {
                router.push(PATHS.COMPANY_EVENT);
                setOpenConfirmDeleteModal(false);
              }}
            />
          </div>
        </div>
      </Modal>
      <Modal width={'50%'} isOpen={openParticipantsCount} onClose={onCloseParticipantsCount} footer={false}>
        <ApplicantsCount onSubmit={onSubmit} onClose={onCloseParticipantsCount} />
      </Modal>
      <Modal width={'50%'} isOpen={openSuccessModal} onClose={onCloseSuccessModalFinish} footer={false}>
        <SuccessModalFinish onGoBack={onGoBack} />
      </Modal>
    </div>
  );
};

export default EventPreview;
