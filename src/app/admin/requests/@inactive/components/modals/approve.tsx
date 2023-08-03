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
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex bg-dark-gray">
        <span>Համոզված եք, որ ցանկանում եք հաստատել դիմում-հայտը</span>
        <Button type="secondary" value="Չեղարկել" />
        <Button type="primary" value="Հաստատել" onClick={actionApprove} />
      </div>
    </Modal>
  );
};
