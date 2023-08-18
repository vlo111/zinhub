'use client';
import React, { useState } from 'react';
import { useGetCompanyPosts } from '@/api/company/use-get-company-posts';
import { IColumns } from '@/components/table/types';
import { IDataTablePostsAdmin } from '../@all/page';
import { useRouter } from 'next/navigation';
import { PATHS } from '@/helpers/constants';
import Pagination from '@/components/pagination';
import DataTable from '@/components/table';

export default () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);

  const { data, loading } = useGetCompanyPosts({ limit: 10, offset: currentPage, type: ['WORK'] });

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  const columns: IColumns<IDataTablePostsAdmin>[] = [
    { Header: 'Ընկերության անվանում', accessor: 'companyName', sortType: '' },
    {
      Header: 'Հայտարարության անվանում',
      accessor: 'statementTitle',
      sortType: '',
    },
    {
      Header: 'Ստատուս',
      accessor: 'status',
      sortType: 'alphanumeric',
      renderRow: (row) => <div>{row?.status} </div>,
    },
    {
      Header: 'Ստեղծման ամսաթիվ',
      accessor: 'createdAt',
      sortType: 'alphanumeric',
      renderRow: (row) => <div>{new Date(row.createdAt ?? '').toLocaleDateString()}</div>,
    },
  ];

  const onRowClick = (row: IDataTablePostsAdmin) => {
    router.push(`${PATHS.ADMIN_POST_WORK}/${row?.id}`);
  };

  return (
    <div>
      {!loading && <DataTable<IDataTablePostsAdmin> column={columns} data={data?.result} onRowClick={onRowClick} />}
      <Pagination offset={currentPage} count={data.count} onPageChange={handlePageChange} />
    </div>
  );
};
