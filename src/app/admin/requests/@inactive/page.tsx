'use client';
import DataTable from './components/table';
import { useGetCompanyList } from '@/api/company/use-get-all-company';
import { useState } from 'react';
import Pagination from '@/components/pagination';

export default () => {
  const [currentPage, setCurrentPage] = useState(0);

  const { data, loading } = useGetCompanyList({ limit: 10, offset: currentPage, statuses: ['PENDING'] });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="h-full w-full flex flex-col justify-between">
      {!loading && (
        <>
          <DataTable data={data.result} />
        </>
      )}
      <Pagination offset={currentPage} count={data.count} onPageChange={handlePageChange} />
    </div>
  );
};
