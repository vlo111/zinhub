import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useParams, useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';
import { IAboutCompany } from '../../../types';
import GradientLine from '@/app/company/posts/components/gradientLines';
import InfoItem from '../../../../components/items';
import Button from '@/components/button';
import Modal from '@/components/modal';
import ApplicantsCount from '@/app/company/posts/event/components/applicants-count';
import SuccessModalFinish from '@/app/company/posts/components/success-finish-modal';
import { default as EditedIcon } from '@/components/icons/edite.svg';
import { default as DeletedIcon } from '@/components/icons/deleted-red.svg';
import useFinishedPost from '@/api/posts/finish';
import { IFormDAtaModal } from '@/app/company/posts/course/types';
import { useQueryClient } from '@tanstack/react-query';

const button = 'border py-2 px-4 flex flex-row items-center gap-2 rounded-md text-sm';

const AboutCompany: React.FC<IAboutCompany> = ({ workId, status, formData, company, role, openModal }) => {
  const [openParticipantsCount, setOpenParticipantsCount] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const queryClient = useQueryClient();
  const { id } = useParams();
  const router = useRouter();

  const { mutate: finishedPostById } = useFinishedPost({
    onSuccess: () => {
      setOpenParticipantsCount(false);
      setOpenSuccessModal(true);
        void queryClient.invalidateQueries(['api/statements/all']);        

    },
  });

  const onCloseParticipantsCount = () => {
    setOpenParticipantsCount(false);
  };
  const onCloseSuccessModalFinish = () => {
    setOpenSuccessModal(false);
  };

  const onGoBack = () => {
    setOpenSuccessModal(false);
    router.push('/company/posts/work')
  };

  const onSubmit: SubmitHandler<IFormDAtaModal> = (data) => {
    finishedPostById({
      id: workId,
      formData: {
        participants: +data.participants,
        completedCourses: +data.completedCourses,
      },
    });
  };
  return (
    <div className="flex-col w-full grid grid-cols-3 gap-4">
      <div className="flex flex-col gap-4 col-span-2 ">
        sdvsdv
        <div className="flex flex-row gap-4">
          <img src={company?.photo} className="w-60 h-52 rounded-md border border-gray" />
          <div className="flex flex-col gap-4">
            <p className="text-xl font-medium">
              {formData?.companyName !== undefined ? formData?.companyName : formData?.title}
            </p>
            <p className="text-xs font-normal first-letter text-primary-blue">{company?.name}</p>
            {role === 'COMPANY' ? (
              <div className="flex flex-row gap-2 flex-wrap">
                {status === 'ACTIVE' ? (
                  <>
                    <button
                      className={`${button} border-primary-blue text-primary-blue`}
                      onClick={() => router.push(`${PATHS.WORK_EDIT}/${id}`)}
                    >
                      <EditedIcon /> Խմբագրել
                    </button>
                    <button className={`${button} border-error text-error`} onClick={openModal}>
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
      <div className="flex flex-col w-full p-8 bg-light-blue gap-4 rounded-md ">
        <p className="text-lg font-bold">Դասընթացի մանրամասները</p>
        <div className="flex flex-col gap-2 ">
          <InfoItem
            label={'Գտնվելու վայրը (Մարզ)'}
            value={formData?.regionId !== undefined ? formData?.regionId?.label : formData?.region?.title ?? ''}
          />
          <InfoItem label={'Հասցե'} value={formData?.location ?? ''} />
          <InfoItem label={'Աշխատավարձ'} value={formData?.salary ?? ''} />
          <InfoItem label={'Հեռախոս'} value={formData?.phone ?? ''} />
          <GradientLine />
          <InfoItem
            label={'Դիմելու վերջնաժամկետ'}
            value={new Date(formData?.applicationDeadline ?? '').toLocaleDateString() ?? ''}
          />
          <InfoItem label={'Աշխ․ պայման'} value={'Մշտական'} />
          <InfoItem label={'Զբաղվածություն'} value={formData?.duration ?? ''} />
          <InfoItem
            label={'Մակարդակ'}
            value={formData?.levelId !== undefined ? formData?.levelId?.label : formData?.level?.title ?? ''}
          />
        </div>
      </div>
      <Modal width={'50%'} isOpen={openParticipantsCount} onClose={onCloseParticipantsCount} footer={false}>
        <ApplicantsCount onSubmit={onSubmit} onClose={onCloseParticipantsCount} />
      </Modal>
      <Modal width={'50%'} isOpen={openSuccessModal} onClose={onCloseSuccessModalFinish} footer={false}>
        <SuccessModalFinish onGoBack={onGoBack} />
      </Modal>
    </div>
  );
};

export default AboutCompany;
