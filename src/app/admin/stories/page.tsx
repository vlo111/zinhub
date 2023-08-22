'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';
import { columns } from '../components/success-columns';
import Pagination from '@/components/pagination';
import DataTable from '@/components/table';
import useGetAllSuccessStories from '@/api/success-stories/use-get-success';
import Button from '@/components/button';
import useDeleteStories from '@/api/success-stories/use-delete-stories';
import Modal from '@/components/modal';
import { default as SuccessIcon } from '@/components/icons/success.svg';
import useUpdateStatusStory from '@/api/success-stories/use-update-status';

export interface IDataTableStories {
  id: string;
  successTitle: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  adminName: string;
  event?: string;
  event1?: string;
}

export default () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const [deleteId, setDeleteId] = useState('');
  const [isSuccessDeleted, setIsSuccessDeleted] = useState(false);

  const { data, isLoading, refetch } = useGetAllSuccessStories(10, currentPage);

  const { mutate: deleteStoriesById } = useDeleteStories({
    onSuccess: () => {
      refetch();
      setDeleteId('');
      setIsSuccessDeleted(true);
    },
  });

  const { mutate: updateStatusStoryById } = useUpdateStatusStory();

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const onDelete = (id: string) => {
    setDeleteId(id);
  };
  const onEdit = (id: string) => {
    router.push(`${PATHS.ADMIN_STORIES_EDIT}/${id}`);
  };

  const closeDeleteModal = () => {
    setDeleteId('');
  };
  const closeIsSuccessDeleted = () => {
    setIsSuccessDeleted(false);
    setCurrentPage(0);
  };

  const onRowClick = (row: IDataTableStories) => {
    router.push(`${PATHS.ADMIN_STORIES}/${row?.id}`);
  };

  const onChangeStatus = (id: string) => {
    updateStatusStoryById({ id });
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="w-full flex justify-end">
        <Button type="secondary" value={'Ստեղծել նոր'} onClick={() => router.push(PATHS.ADMIN_STORIES_CREATE)} />
      </div>
      {!isLoading && (
        <DataTable<IDataTableStories>
          column={columns(onDelete, onEdit, onChangeStatus)}
          data={data?.result}
          onRowClick={onRowClick}
        />
      )}
      <Pagination offset={currentPage} count={data.count} onPageChange={handlePageChange} />
      <Modal isOpen={!!deleteId} onClose={closeDeleteModal} width={'40%'} footer={false}>
        <div className="flex items-center flex-col gap-11">
          <p className="w-[80%] text-lg font-medium text-davy-gray flex text-center">
            Համոզվա՞ծ եք, որ ցանկանում եք հեռացնել պատմությունը
          </p>
          <div className="flex flex-row gap-4">
            <Button value="Չեղարկել" type="secondary" onClick={() => setDeleteId('')} />
            <Button
              value="Հաստատել"
              onClick={() => {
                deleteStoriesById(deleteId);
              }}
            />
          </div>
        </div>
      </Modal>
      <Modal isOpen={isSuccessDeleted} onClose={closeIsSuccessDeleted} width={'40%'} footer={false}>
        <div className="flex items-center flex-col gap-11">
          <SuccessIcon />
          <p className="w-[80%] text-lg font-medium text-davy-gray flex text-center">
            Ձեր պատմությունը հաջողությամբ հեռացվել է
          </p>
        </div>
      </Modal>
    </div>
  );
};
