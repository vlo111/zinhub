import Button from '@/components/button';
import { useState } from 'react';
import { IDataPost, IFormDAtaModal } from '../../types';
import { useRouter } from 'next/navigation';
import { PATHS, STATUS } from '@/helpers/constants';
import { useQueryClient } from '@tanstack/react-query';
import { SubmitHandler } from 'react-hook-form';
import Modal from '@/components/modal';
import ParticipantsCount from '../participants-count';
import SuccessModalFinish from '../../../components/success-finish-modal';
import useFinishedPost from '@/api/posts/finish';
import Image from 'next/image';
import { default as EditedIcon } from '@/components/icons/edite.svg';
import { default as LocationIcon } from '@/components/icons/location.svg';

const CourseCard: React.FC<{ data: IDataPost }> = ({ data }) => {
  const router = useRouter();
  const [openParticipantsCount, setOpenParticipantsCount] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const queryClient = useQueryClient();

  const { mutate: finishedPostById } = useFinishedPost({
    onSuccess: () => {
      setOpenSuccessModal(true);
      setOpenParticipantsCount(false);
      void queryClient.invalidateQueries(['api/statements/all']);
    },
  });

  const onCloseParticipantsCount = () => {
    setOpenParticipantsCount(false);
  };
  const onCloseSuccessModalFinish = () => {
    setOpenSuccessModal(false);
  };

  const onSubmit: SubmitHandler<IFormDAtaModal> = (formData) => {
    finishedPostById({
      id: data?.id,
      formData: {
        participants: +formData.participants,
        completedCourses: +formData.completedCourses,
      },
    });
  };

  const onGoBack = () => {
    setOpenSuccessModal(false);
    router.push('/company/posts/course');
  };

  return (
    <div className="grid grid-cols-4 gap-4 w-full p-2 rounded-[10px] border-2 border-[#D2E6FF] hover:border-2 hover:border-primary-blue group">
      <div className="col-span-1">
        <Image
          width={192}
          height={192}
          className="xs:h-[200px] xs:hidden w-full h-[104px] object-cover"
          src={data.companyPhoto as string}
          alt="Picture of the company"
        />
      </div>
      <div className="col-span-3">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <p className="font-bold text-xs text-[#333]">{data.statementTitle}</p>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col content-between h-full justify-between col-span-1">
              <div className="flex align-center w-full justify-end gap-2">
                {data?.status === STATUS.ACTIVE ? (
                  <button
                    className="px-5 py-[10px] border border-primary-blue rounded-md"
                    onClick={() => router.push(`${PATHS.COURSE_EDIT}/${data.id}`)}
                  >
                    <EditedIcon />
                  </button>
                ) : null}
                {data?.status === STATUS.ACTIVE || data?.status === STATUS.INACTIVE ? (
                  <Button value={'Ավարտել'} onClick={() => setOpenParticipantsCount(true)} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 mb-4 mt-4">
          <div className="col-span-2">
            <p className="text-davy-gray text-xs font-normal"> Ստեղծված՝ {data.timeAgo}</p>
          </div>
          <div className="col-span-3">
            {data?.status === STATUS.ACTIVE ? (
              <p className="text-davy-gray text-xs font-normal flex flex-row items-center gap-2">
                <div className="w-[6px] h-[6px] rounded-full bg-[#52C41A]" />
                Նոր
              </p>
            ) : null}
            {data?.status === STATUS.INACTIVE ? (
              <p className="text-davy-gray text-xs font-normal flex flex-row items-center gap-2">
                <div className="w-[6px] h-[6px] rounded-full bg-[#1F82FF]" />
                Ընթացիկ
              </p>
            ) : null}
            {data?.status === STATUS.BLOCKED ? (
              <p className="text-davy-gray text-xs font-normal flex flex-row items-center gap-2">
                <div className="w-[6px] h-[6px] rounded-full bg-[#FF4D4F]" />
                Արգելափակված
              </p>
            ) : null}
            {data?.status === STATUS.DONE ? (
              <p className="text-davy-gray text-xs font-normal flex flex-row items-center gap-2">
                <div className="w-[6px] h-[6px] rounded-full bg-[#9E9E9E]" />
                Ավարտված
              </p>
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          <div className="col-span-2">
            <p className="text-davy-gray text-xs font-normal flex flex-row gap-2">
              <LocationIcon /> {data.statementLocation}
            </p>
          </div>
          <div className="col-span-3">
            <p className="text-davy-gray text-xs font-normal">{data?.statementFiled}</p>
          </div>
        </div>
        <div className="w-full flex justify-end col-span-3 h-4 my-2 ">
          <button
            className="font-bold text-primary-blue hidden group-hover:block"
            onClick={() => router.push(`${PATHS.COMPANY_COURSE}/${data.id}`)}
          >
            Տեսնել ավելին
          </button>
        </div>
      </div>
      <Modal width={'50%'} isOpen={openParticipantsCount} onClose={onCloseParticipantsCount} footer={false}>
        <ParticipantsCount onSubmit={onSubmit} onClose={onCloseParticipantsCount} />
      </Modal>
      <Modal width={'50%'} isOpen={openSuccessModal} onClose={onCloseSuccessModalFinish} footer={false}>
        <SuccessModalFinish onGoBack={onGoBack} />
      </Modal>
    </div>
  );
};

export default CourseCard;
