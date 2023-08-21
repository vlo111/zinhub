'use client';
import React, { useState } from 'react';
import { useGetCompanyPosts } from '@/api/company/use-get-company-posts';
import { IDataTablePostsAdmin } from '../@all/page';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';
import { columns } from '../../components/announcements-columns';
import Pagination from '@/components/pagination';
import DataTable from '@/components/table';

export default () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  const { data, loading } = useGetCompanyPosts({ limit: 10, offset: currentPage, type: ['OTHER'] });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const onRowClick = (row: IDataTablePostsAdmin) => {
    router.push(`${PATHS.ADMIN_POST_OTHER}/${row?.id}`);
  };

  return (
    <div>
      {!loading && <DataTable<IDataTablePostsAdmin> column={columns} data={data?.result} onRowClick={onRowClick} />}
      <Pagination offset={currentPage} count={data.count} onPageChange={handlePageChange} />
    </div>
  );
};
