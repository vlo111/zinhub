'use client';
import DataTable from '@/components/table';
import React, { useState } from 'react';
import Pagination from '@/components/pagination';
import { ApproveModal } from '@/app/admin/requests/@pending/components/modals/approve';
import { RejectModal } from '@/app/admin/requests/@pending/components/modals/reject';
import { ICompanyListPending, ICompanyListRejected, useGetCompanyList } from '@/api/company/use-get-all-company';
import { IColumns } from '@/components/table/types';
import { default as ExcelIcon } from '../../components/icons/file-excel.svg';

export default () => {
  const [openApprove, setOpenApprove] = useState<string>('');
  const [openReject, setOpenReject] = useState<string>('');

  const [currentPage, setCurrentPage] = useState(0);

  const { data, loading } = useGetCompanyList({ limit: 10, offset: currentPage, statuses: ['REJECTED'] });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const columns: IColumns<ICompanyListRejected>[] = [
    { Header: 'Անվանում', accessor: 'name', sortType: 'basic' },
    { Header: 'ՀՎՀՀ', accessor: 'taxAccount', sortType: 'alphanumeric' },
    {
      Header: 'Ստեղծման ամսաթիվ',
      accessor: 'updatedAt',
      sortType: 'alphanumeric',
      renderRow: (row: ICompanyListPending) => <div>{new Date(row.createdAt).toLocaleDateString()}</div>,
    },
    {
      Header: 'Մերժման ամսաթիվ',
      accessor: 'rejectDate',
      sortType: 'alphanumeric',
      renderRow: (row: ICompanyListPending) => <div>{new Date(row.createdAt).toLocaleDateString()}</div>,
    },
    { Header: 'Պատճառ', accessor: 'reasonForRejection', sortType: 'alphanumeric' },
    { Header: 'Ում կողմից', accessor: 'rejectedAdminName', sortType: 'alphanumeric' },
  ];

  return (
    <>
    <div className="w-full flex justify-end mb-6">
        <button className="px-4 py-2 border border-primary-blue-dark text-sm text-primary-blue-dark flex flex-row items-center gap-2 rounded-md">
          <ExcelIcon />
          Արտահանել Excel
        </button>
      </div>
    <div className="h-full w-full flex flex-col justify-between">
      {!loading && <DataTable<ICompanyListRejected> column={columns} data={data.result} />}
      <Pagination offset={currentPage} count={data.count} onPageChange={handlePageChange} />
      <ApproveModal
        id={openApprove}
        onClose={() => setOpenApprove('')}
        isOpen={openApprove !== ''}
        currentPage={currentPage}
      />
      <RejectModal
        id={openReject}
        onClose={() => setOpenReject('')}
        isOpen={openReject !== ''}
        currentPage={currentPage}
      />
    </div>
    </>
  );
};
