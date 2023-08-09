import { useState } from 'react';
import { ICourseDetails } from '../../types';
import { useAuth } from '@/providers/auth';
import { useParams, useRouter } from 'next/navigation';
import { default as SuccessIcon } from '@/components/icons/success.svg';
import TrainerCard from '@/components/trainer';
import Details from './details';
import Program from './program';
import Skills from './skills';
import useDeletePost from '@/api/company/use-delete-post';
import Modal from '@/components/modal';
import Button from '@/components/button';

const CourseDetails: React.FC<ICourseDetails> = ({ formData, company }) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false);
  const teachersArray = formData?.teachers !== undefined ? formData?.teachers : formData?.teacherIds;
  const { role } = useAuth();
  const { id } = useParams();
  const router = useRouter();

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

  return (
    <div className="flex flex-col gap-14 w-full p-4">
      <Details formData={formData} company={company} role={role} openModal={openDeleteModal} />
      <Program formData={formData} />
      <Skills formData={formData} />
      <div className="flex flex-col gap-4">
        <p className="text-xsl text-davy-gray font-bold">Դասավանդող</p>
        {teachersArray?.map((teacher) => (
          <TrainerCard key={teacher?.id} teacher={teacher} />
        ))}
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
                router.push('/company/posts/course');
                setOpenConfirmDeleteModal(false);
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CourseDetails;
