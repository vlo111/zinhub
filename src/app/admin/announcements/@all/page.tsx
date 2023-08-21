'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useGetCompanyPosts } from '@/api/company/use-get-company-posts';
import { PATHS } from '@/helpers/constants';
import { columns } from '../../components/announcements-columns';
import Pagination from '@/components/pagination';
import DataTable from '@/components/table';

export interface IDataTablePostsAdmin {
  id: string;
  status: string;
  type: string;
  companyName?: string;
  createdAt?: string;
  statementTitle?: string;
}

export default () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  const { data, loading } = useGetCompanyPosts({ limit: 10, offset: currentPage });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const onRowClick = (row: IDataTablePostsAdmin) => {
    if (row?.type === 'TRINING') {
      router.push(`${PATHS.ADMIN_POST_COURSE}/${row?.id}`);
    }
    if (row?.type === 'OTHER') {
      router.push(`${PATHS.ADMIN_POST_OTHER}/${row?.id}`);
    }
    if (row?.type === 'WORK') {
      router.push(`${PATHS.ADMIN_POST_WORK}/${row?.id}`);
    }
  };

  return (
    <div>
      {!loading && <DataTable<IDataTablePostsAdmin> column={columns} data={data?.result} onRowClick={onRowClick} />}
      <Pagination offset={currentPage} count={data.count} onPageChange={handlePageChange} />
    </div>
  );
};
