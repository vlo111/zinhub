'use client';
import { useApproveCompany } from '@/api/admin/use-approve';
import Modal from '@/components/modal';
import Button from '@/components/button';

type Props = {
  currentPage: number;
  id: string;
  isOpen: boolean;
  onClose: () => void;
};
export const ApproveModal = ({ currentPage, id, isOpen, onClose }: Props) => {
  const { mutate: approveCompany } = useApproveCompany(currentPage);

  const actionApprove = () => {
    approveCompany({ id });
    onClose();
  };

  return (
    <Modal width={'40%'} isOpen={isOpen} onClose={onClose} footer={false}>
      <div className="flex flex-col gap-8">
        <span>Համոզված եք, որ ցանկանում եք հաստատել դիմում-հայտը</span>
        <div className="flex justify-center gap-6">
          <Button type="secondary" value="Չեղարկել" onClick={onClose} />
          <Button type="primary" value="Հաստատել" onClick={actionApprove} />
        </div>
      </div>
    </Modal>
  );
};
