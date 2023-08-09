'use client';
import React, { useState } from 'react';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';
import DataTable from '@/components/table';
import useGetAllTeachers from '@/api/create-teacher/get-teacher';
import { IColumns } from '@/components/table/types';
import { default as EditIcon } from '@/components/icons/edited-gray.svg';
import { default as DeleteIcon } from '@/components/icons/delete.svg';
import { default as SuccessIcon } from '@/components/icons/success.svg';
import Modal from '@/components/modal';
import useDeleteTeacher from '@/api/create-teacher/delete';
import { ITableData } from './types';
import Pagination from '@/components/pagination';

export default () => {
  const [openDeleteModal, setOpenDeleteModal] = useState<string>('');
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();

  const { data, isLoading, refetch } = useGetAllTeachers(10, currentPage);
  const { mutate: deleteTeacherById } = useDeleteTeacher({
    onSuccess: () => {
      setOpenConfirmDeleteModal(true);
      setOpenDeleteModal('');
      refetch();
    },
  });

  const onclose = () => {
    setOpenDeleteModal('');
  };
  const oncloseConfirmModal = () => {
    setOpenConfirmDeleteModal(false);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const columns: IColumns<ITableData>[] = [
    {
      Header: 'Անուն Ազգանուն',
      accessor: 'fullName',
      sortType: '',
      renderRow: (row: ITableData) => (
        <div className="flex flex-row gap-2 items-center ">
          <img src={row.photo} alt={row.fullName} className="w-8 h-8 rounded-full" />
          <p>{row.fullName}</p>
        </div>
      ),
    },
    {
      Header: 'Մասնագիտություն',
      accessor: 'profession',
      sortType: '',
    },
    {
      Header: 'Գործողություն',
      accessor: 'id',
      sortType: '',
      renderRow: (row: ITableData) => (
        <div className="flex items-center gap-4">
          <div role="presentation" className="cursor-pointer">
            <EditIcon />
          </div>
          <div role="presentation" className="cursor-pointer" onClick={() => setOpenDeleteModal(row.id)}>
            <DeleteIcon />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col gap-10 mb-5 lg:px-10 md:px-3 sm:px-3 xs:px-3">
      <div className="flex w-full justify-end">
        <Button
          value={'+ Ավելացնել դասավանդող'}
          type="secondary"
          submit={false}
          onClick={() => router.push('/company/teacher/create')}
        />
      </div>
      <div>{!isLoading && <DataTable column={columns} data={data?.result} />}</div>
      <Pagination offset={currentPage} count={data.count} onPageChange={handlePageChange} />
      <Modal isOpen={openDeleteModal !== ''} onClose={onclose} width={'40%'} footer={false}>
        <div className="flex items-center flex-col gap-11">
          <p className="w-[80%] text-lg font-medium text-davy-gray flex text-center">
            Համոզվա՞ծ եք, որ ցանկանում եք հեռացնել դասընթացավարին
          </p>
          <div className="flex flex-row gap-4">
            <Button value="Չեղարկել" type="secondary" onClick={() => setOpenDeleteModal('')} />
            <Button
              value="Հաստատել"
              onClick={() => {
                deleteTeacherById(openDeleteModal);
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
            <Button value="Վերադառնալ իմ էջ" type="secondary" onClick={() => setOpenConfirmDeleteModal(false)} />
          </div>
        </div>
      </Modal>
    </div>
  );
};
