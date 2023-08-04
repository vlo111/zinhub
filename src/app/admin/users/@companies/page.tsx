'use client';
import DataTable from '@/components/table';
import { ICompanyListPending, useGetCompanyList } from '@/api/company/use-get-all-company';
import React, { useState } from 'react';
import Pagination from '@/components/pagination';
import { ApproveModal } from '@/app/admin/requests/@pending/components/modals/approve';
import { RejectModal } from '@/app/admin/requests/@pending/components/modals/reject';

interface IColumns {
  Header: string;
  accessor: keyof ICompanyListPending;
  sortType?: string;
}

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

  const columns: IColumns[] = [
    { Header: 'Անվանում', accessor: 'name', sortType: 'basic' },
    { Header: 'Ստատուս', accessor: 'status', sortType: 'alphanumeric' },
    { Header: 'Ստեղծման ամսաթիվ', accessor: 'createdAt', sortType: 'alphanumeric' },
    { Header: 'Վերջին թարմացում', accessor: 'updatedAt', sortType: 'alphanumeric' },
    { Header: 'Գործողություն', accessor: 'checkStatus' },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between">
      {!loading && (
        <DataTable<ICompanyListPending>
          column={columns}
          data={data.result}
          setOpenApprove={(id) => setOpenApprove(id)}
          setOpenReject={(id) => setOpenReject(id)}
        />
      )}
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
  );
};
