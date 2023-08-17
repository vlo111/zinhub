'use client';
import DataTable from '@/components/table';
import { ICompanyListPending, useGetCompanyList } from '@/api/company/use-get-all-company';
import React, { useState } from 'react';
import Pagination from '@/components/pagination';
import { ApproveModal } from '@/app/admin/requests/@pending/components/modals/approve';
import { RejectModal } from '@/app/admin/requests/@pending/components/modals/reject';
import { IColumns } from '@/components/table/types';

import { default as BlockSvg } from '../../components/icons/block.svg';
import { default as UnBlockSvg } from '../../components/icons/un-block.svg';
import { default as ExcelIcon } from '../../components/icons/file-excel.svg';

export default () => {
  const [openApprove, setOpenApprove] = useState<string>('');
  const [openReject, setOpenReject] = useState<string>('');

  const [currentPage, setCurrentPage] = useState(0);

  const { data, loading } = useGetCompanyList({
    limit: 10,
    offset: currentPage,
    statuses: ['ACTIVE', 'INACTIVE', 'BLOCKED'],
  });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const columns: IColumns<ICompanyListPending>[] = [
    { Header: 'Անվանում', accessor: 'name', sortType: 'basic' },
    {
      Header: 'Ստատուս',
      accessor: 'status',
      sortType: 'alphanumeric',
      renderRow: (row: ICompanyListPending) => (
        <div className="flex items-center gap-4">
          <div
            role="presentation"
            className={`rounded-[50px] ${
              row.status === 'ACTIVE' ? 'bg-[#52C41A]' : row.status === 'INACTIVE' ? 'bg-[#CDCDCD]' : 'bg-[#FF4D4F]'
            } w-[5px] h-[5px]`}
            onClick={() => setOpenApprove(row.id)}
          />
          <div>{row.status === 'ACTIVE' ? 'Ակտիվ' : row.status === 'INACTIVE' ? 'Չակտիվացված' : 'Արգելափակված'}</div>
        </div>
      ),
    },
    {
      Header: 'Ստեղծման ամսաթիվ',
      accessor: 'createdAt',
      sortType: 'alphanumeric',
      renderRow: (row: ICompanyListPending) => <div>{new Date(row.createdAt).toLocaleDateString()}</div>,
    },
    {
      Header: 'Վերջին թարմացում',
      accessor: 'updatedAt',
      sortType: 'alphanumeric',
      renderRow: (row: ICompanyListPending) => <div>{new Date(row.createdAt).toLocaleDateString()}</div>,
    },
    {
      Header: 'Գործողություն',
      accessor: 'checkStatus',
      renderRow: (row: ICompanyListPending) => (
        <div className="flex justify-center items-center gap-4">
          <div className="cursor-pointer" onClick={() => setOpenApprove(row.id)}>
            {row.checkStatus === 'ACTIVE' ? <BlockSvg /> : row.checkStatus === 'INACTIVE' ? '' : <UnBlockSvg />}
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
