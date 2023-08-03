'use client';
import Modal from '@/components/modal';
import Button from '@/components/button';
import { useRejectCompany } from '@/api/admin/use-reject';
import FormItem from '@/components/form/item';
import { Textarea } from '@/components/texarea';
import { Form } from '@/components/form';
import { SubmitHandler } from 'react-hook-form';

type Props = {
  currentPage: number;
  id: string;
  isOpen: boolean;
  onClose: () => void;
};

export const RejectModal = ({ currentPage, id, isOpen, onClose }: Props) => {
  const { mutate: rejectCompany } = useRejectCompany(currentPage);

  const onSubmit: SubmitHandler<{ rejectText: string }> = async ({ rejectText }) => {
    rejectCompany({ id, text: rejectText });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Form onSubmit={onSubmit} defaultValues={{ rejectText: '' }}>
        <div className="flex bg-primary-blue">
          <span>Համոզված եք, որ ուզում եք մերժել դիմում հայտը</span>
          <span>Նշել մերժման պատճառը</span>
          <FormItem label="Նշել մերժման պատճառը" name="rejectText">
            <Textarea name="rejectText" />
          </FormItem>
          <Button type="secondary" value="Չեղարկել" submit={false} onClick={onClose} />
          <Button type="primary" value="Հաստատել" />
        </div>
      </Form>
    </Modal>
  );
};
