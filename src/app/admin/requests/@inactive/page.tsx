'use client';
import DataTable from './components/table';
import { useGetCompanyList } from '@/api/company/use-get-all-company';
import React, { useState } from 'react';
import Pagination from '@/components/pagination';
import { ApproveModal } from '@/app/admin/requests/@inactive/components/modals/approve';
import { RejectModal } from '@/app/admin/requests/@inactive/components/modals/reject';

export default () => {
  const [openApprove, setOpenApprove] = useState<string>('');
  const [openReject, setOpenReject] = useState<string>('');

  const [currentPage, setCurrentPage] = useState(0);

  const { data, loading } = useGetCompanyList({ limit: 10, offset: currentPage, statuses: ['PENDING'] });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="h-full w-full flex flex-col justify-between">
      {!loading && (
        <DataTable
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
