'use client';
import DataTable from './components/table';
import { useGetCompanyList } from '@/api/company/use-get-all-company';
import Pagination from '@/app/admin/requests/@inactive/components/pagination';
import { useState } from 'react';

export default () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading } = useGetCompanyList({ limit: 10, offset: currentPage + 10, statuses: ['PENDING'] });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="h-full w-full">
      {!loading && (
        <>
          <DataTable data={data.result} />
        </>
      )}
      <Pagination limit={10} pageSize={currentPage} totalCount={data.count} onChangePage={handlePageChange} />
    </div>
  );
};
