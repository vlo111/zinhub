'use client';
import DataTable from './data-table';
import { useGetCompanyList } from '@/api/company/use-get-all-company';

export default () => {
  const { data, loading } = useGetCompanyList({ limit: 10, offset: 0, statuses: ['PENDING'] });

  return <div className="h-full w-full">{loading === false && <DataTable data={data.result} />}</div>;
};
