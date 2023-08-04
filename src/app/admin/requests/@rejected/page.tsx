'use client';
import DataTable from '@/components/table';
import React, { useState } from 'react';
import Pagination from '@/components/pagination';
import { ApproveModal } from '@/app/admin/requests/@pending/components/modals/approve';
import { RejectModal } from '@/app/admin/requests/@pending/components/modals/reject';
import { ICompanyListRejected, useGetCompanyList } from '@/api/company/use-get-all-company';

interface IColumns {
  Header: string;
  accessor: keyof ICompanyListRejected;
  sortType?: string;
}

export default () => {
  const [openApprove, setOpenApprove] = useState<string>('');
  const [openReject, setOpenReject] = useState<string>('');

  const [currentPage, setCurrentPage] = useState(0);

  const { data, loading } = useGetCompanyList({ limit: 10, offset: currentPage, statuses: ['REJECTED'] });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const columns: IColumns[] = [
    { Header: 'Անվանում', accessor: 'name', sortType: 'basic' },
    { Header: 'ՀՎՀՀ', accessor: 'taxAccount', sortType: 'alphanumeric' },
    { Header: 'Ստեղծման ամսաթիվ', accessor: 'updatedAt', sortType: 'alphanumeric' },
    { Header: 'Մերժման ամսաթիվ', accessor: 'rejectDate', sortType: 'alphanumeric' },
    { Header: 'Պատճառ', accessor: 'reasonForRejection', sortType: 'alphanumeric' },
    { Header: 'Ում կողմից', accessor: 'rejectedAdminName', sortType: 'alphanumeric' },
  ];

  return (
    <div className="h-full w-full flex flex-col justify-between">
      {!loading && (
        <DataTable<ICompanyListRejected>
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
