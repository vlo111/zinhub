'use client';
import React, { useState } from 'react';
import { ICompanyListPending, useGetCompanyList } from '@/api/company/use-get-all-company';
import { ApproveModal } from '@/app/admin/requests/@pending/components/modals/approve';
import { RejectModal } from '@/app/admin/requests/@pending/components/modals/reject';
import { STATUS } from '@/helpers/constants';
import { IColumns } from '@/components/table/types';
import Pagination from '@/components/pagination';
import DataTable from '@/components/table';
import Button from '@/components/button';

export default () => {
  const [openApprove, setOpenApprove] = useState<string>('');
  const [openReject, setOpenReject] = useState<string>('');

  const [currentPage, setCurrentPage] = useState(0);

  const { data, loading } = useGetCompanyList({
    limit: 10,
    offset: currentPage,
    statuses: [STATUS.ACTIVE],
  });

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
      renderRow: (row: ICompanyListPending) => <div>{row.status}</div>,
    },
  ];

  return (
    <>
      <div className='w-full flex justify-end mb-6'>
        <Button
          value={'+ Ավելացնել ադմինիստրատոր'}
          type="secondary"
          submit={false}
        />
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
