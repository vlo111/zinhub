'use client';
import React, { useState } from 'react';
import DataTable from '@/components/table';
import Pagination from '@/components/pagination';
import { ApproveModal } from './components/modals/approve';
import { RejectModal } from './components/modals/reject';
import { IColumns } from '@/components/table/types';
import { ICompanyListPending, useGetCompanyList } from '@/api/company/use-get-all-company';
import { default as ApproveSvg } from './components/icons/approve.svg';
import { default as RejectSvg } from './components/icons/reject.svg';
import { default as ExcelIcon } from '../../components/icons/file-excel.svg';

export default () => {
  const [openApprove, setOpenApprove] = useState<string>('');
  const [openReject, setOpenReject] = useState<string>('');

  const [currentPage, setCurrentPage] = useState(0);

  const { data, loading } = useGetCompanyList({ limit: 10, offset: currentPage, statuses: ['PENDING'] });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const columns: IColumns<ICompanyListPending>[] = [
    { Header: 'Անվանում', accessor: 'name', sortType: 'basic' },
    { Header: 'ՀՎՀՀ', accessor: 'taxAccount', sortType: 'alphanumeric' },
    {
      Header: 'Ստեղծման ամսաթիվ',
      accessor: 'createdAt',
      sortType: 'alphanumeric',
      renderRow: (row: ICompanyListPending) => <div>{new Date(row.createdAt).toLocaleDateString()}</div>,
    },
    { Header: 'Հեռախոս', accessor: 'phone', sortType: 'alphanumeric' },
    {
      Header: 'Գործողություն',
      accessor: 'status',
      renderRow: (row: ICompanyListPending) => (
        <div className="flex justify-center items-center gap-4">
          <div role="presentation" className="cursor-pointer" onClick={() => setOpenApprove(row.id)}>
            <ApproveSvg />
          </div>
          <div role="presentation" className="cursor-pointer" onClick={() => setOpenReject(row.id)}>
            <RejectSvg />
          </div>
        </div>
      ),
    },
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
        {!loading && <DataTable<ICompanyListPending> column={columns} data={data.result} />}
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
