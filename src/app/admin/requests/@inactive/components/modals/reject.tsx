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
    <Modal width={'50%'} isOpen={isOpen} onClose={onClose} footer={false}>
      <Form onSubmit={onSubmit}>
        <div className="flex flex-col gap-8 items-center">
          <span className="text-dark-gray text-[1.25rem]">Համոզված եք, որ ուզում եք մերժել դիմում հայտը</span>
          <FormItem label="Նշել մերժման պատճառը" name="rejectText">
            <Textarea name="rejectText" />
          </FormItem>
          <div className="flex justify-center gap-6">
            <Button type="secondary" value="Չեղարկել" submit={false} onClick={onClose} />
            <Button type="primary" value="Հաստատել" />
          </div>
        </div>
      </Form>
    </Modal>
  );
};
