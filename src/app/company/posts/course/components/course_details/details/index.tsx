import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { PATHS, STATUS } from '@/helpers/constants';
import { SubmitHandler } from 'react-hook-form';
import { useQueryClient } from '@tanstack/react-query';
import { IDetails, IFormDAtaModal, IRejectionModalData } from '../../../types';
import Button from '@/components/button';
import InfoItem from './item';
import GradientLine from '@/app/company/posts/components/gradientLines';
import Modal from '@/components/modal';
import ParticipantsCount from '../../participants-count';
import SuccessModalFinish from '@/app/company/posts/components/success-finish-modal';
import { default as EditedIcon } from '@/components/icons/edite.svg';
import { default as DeletedIcon } from '@/components/icons/deleted-red.svg';
import useFinishedPost from '@/api/posts/finish';
import BlockModalContent from '@/app/admin/post/components/block-modal-content';
import useBlockPost from '@/api/posts/block';
import './index.css';

const Details: React.FC<IDetails> = ({ status, formData, company, role, openModal }) => {
  const [openParticipantsCount, setOpenParticipantsCount] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openBlockModal, setOpenBlockModal] = useState(false);
  const router = useRouter();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { mutate: finishedPostById } = useFinishedPost({
    onSuccess: () => {
      setOpenSuccessModal(true);
      setOpenParticipantsCount(false);
      void queryClient.invalidateQueries(['api/statements/all']);
    },
  });

  const onGoBack = () => {
    setOpenSuccessModal(false);
  };

  const onCloseParticipantsCount = () => {
    setOpenParticipantsCount(false);
  };

  const onSubmit: SubmitHandler<IFormDAtaModal> = (data) => {
    finishedPostById({
      id: id,
      formData: {
        participants: +data.participants,
        completedCourses: +data.completedCourses,
      },
    });
  };

  const { mutate: blockPostById } = useBlockPost({
    onSuccess: () => {
      setOpenBlockModal(false);
      router.push('/admin/announcements');
      void queryClient.invalidateQueries(['api/statements/all']);
    },
  });

  const onGoBackBlock = () => {
    setOpenBlockModal(false);
  };

  const onSubmitBlock: SubmitHandler<IRejectionModalData> = (data) => {
    blockPostById({
      id: id,
      formData: {
        ...data,
      },
    });
  };

  return (
    <>
      <div className="flex-col w-full grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-6 col-span-2 ">
          <div className="flex flex-row gap-4">
            <img src={company?.photo} className="w-60 h-52 rounded-md border border-gray" />
            <div className="flex flex-col gap-4">
              <p className="text-xl font-medium">
                {formData?.courseName !== undefined ? formData?.courseName : formData?.title}
              </p>
              <p className="text-xs font-normal first-letter text-primary-blue">{company?.name}</p>
              {role === 'COMPANY' ? (
                <div className="flex flex-row flex-wrap gap-2">
                  {status === STATUS.ACTIVE ? (
                    <>
                      <button
                        className="button border-primary-blue text-primary-blue"
                        onClick={() => router.push(`${PATHS.COURSE_EDIT}/${id}`)}
                      >
                        <EditedIcon /> Խմբագրել
                      </button>
                      <button className="button border-error text-error" onClick={openModal}>
                        <DeletedIcon />
                        Ջնջել
                      </button>
                    </>
                  ) : null}
                  {status === STATUS.ACTIVE || status === STATUS.INACTIVE ? (
                    <Button value={'Ավարտել'} onClick={() => setOpenParticipantsCount(true)} />
                  ) : null}
                </div>
              ) : null}
              {role === 'SUPER_ADMIN' ? (
                <div className="flex flex-row gap-4 items-center">
                  {status !== STATUS.BLOCKED ? (
                    <Button type="primary" value={'Արգելափակել'} onClick={() => setOpenBlockModal(true)} />
                  ) : null}
                  <p className="text-davy-gray text-xs">{`Ստեղծված՝ ${new Date(
                    formData?.createdAt ?? ''
                  ).toLocaleDateString()}`}</p>
                </div>
              ) : null}
            </div>
          </div>
          <p className="text-sm font-medium text-davy-gray">
            {formData?.courseDescription !== undefined ? formData?.courseDescription : formData?.description}
          </p>
        </div>
        <div className="flex flex-col w-full p-8 bg-light-blue rounded-md gap-4">
          <p className="text-lg font-bold">Դասընթացի մանրամասները</p>
          <div className="flex flex-col gap-2">
            <InfoItem
              label={'Ձևաչափը'}
              value={formData?.formatId !== undefined ? formData?.formatId?.label : formData?.format?.title ?? ''}
            />
            <InfoItem
              label={'Գտնվելու մարզը'}
              value={formData?.regionId !== undefined ? formData?.regionId?.label : formData?.region?.title ?? ''}
            />
            <InfoItem label={'Հասցե'} value={formData?.location ?? ''} />
            <InfoItem label={'Հեռախոս'} value={formData?.phone ?? ''} />
            <GradientLine />
            <InfoItem
              label={'Դասընթացի մեկնարկը'}
              value={new Date(formData?.startDate ?? '').toLocaleDateString() ?? ''}
            />
            <InfoItem
              label={'Տևողությունը'}
              value={formData?.courseDuration !== undefined ? formData?.courseDuration : formData?.duration ?? ''}
            />
            <InfoItem label={'Դասաժամեր'} value={formData?.classHours ?? ''} />
            <InfoItem
              label={'Դասընթացի Մակարդակ'}
              value={formData?.levelId !== undefined ? formData?.levelId?.label : formData?.level?.title ?? ''}
            />
            <InfoItem
              label={'Դասընթացի Լեզու'}
              value={formData?.languageId !== undefined ? formData?.languageId?.label : formData?.language?.title ?? ''}
            />
          </div>
        </div>
      </div>
      <Modal width={'50%'} isOpen={openParticipantsCount} onClose={onCloseParticipantsCount} footer={false}>
        <ParticipantsCount onSubmit={onSubmit} onClose={onCloseParticipantsCount} />
      </Modal>
      <Modal width={'50%'} isOpen={openSuccessModal} onClose={onGoBack} footer={false}>
        <SuccessModalFinish onGoBack={onGoBack} />
      </Modal>
      <Modal width={'50%'} isOpen={openBlockModal} onClose={onGoBackBlock} footer={false}>
        <BlockModalContent onGoBack={onGoBackBlock} onSubmit={onSubmitBlock} />
      </Modal>
    </>
  );
};

export default Details;
