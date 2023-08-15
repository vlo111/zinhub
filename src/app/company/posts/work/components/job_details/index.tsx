import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAuth } from '@/providers/auth';
import { IJobPreview } from '../../types';
import AboutCompany from './about_company';
import JobContent from './job_content';
import useDeletePost from '@/api/company/use-delete-post';
import Modal from '@/components/modal';
import Button from '@/components/button';
import { default as SuccessIcon } from '@/components/icons/success.svg';
import { PATHS } from '@/helpers/constants';

const JobPreview: React.FC<IJobPreview> = ({ status, formData, company }) => {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false);
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
    <div className="mb-12">
      <AboutCompany status={status} formData={formData} company={company} role={role} openModal={openDeleteModal} />
      <JobContent formData={formData} />
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
                router.push(PATHS.COMPANY_WORK);
                setOpenConfirmDeleteModal(false);
              }}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default JobPreview;
