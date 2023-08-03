import React from 'react';
import { useTable, Column, useSortBy } from 'react-table';
import { ICompanyList } from '@/api/company/use-get-all-company';
import Thead from '@/app/admin/requests/@inactive/components/table/thead';
import Tbody from '@/app/admin/requests/@inactive/components/table/tbody';

interface DataTableProps {
  data: ICompanyList[];
  setOpenApprove: React.Dispatch<React.SetStateAction<string>>;
  setOpenReject: React.Dispatch<React.SetStateAction<string>>;
}

const DataTable: React.FC<DataTableProps> = ({ data, setOpenApprove, setOpenReject }) => {
  const columns: Column<ICompanyList>[] = React.useMemo(
    () => [
      { Header: 'Անվանում', accessor: 'name', sortType: 'basic' },
      { Header: 'ՀՎՀՀ', accessor: 'taxAccount', sortType: 'alphanumeric' },
      { Header: 'Ստեղծման ամսաթիվ', accessor: 'createdAt', sortType: 'alphanumeric' },
      { Header: 'Հեռախոս', accessor: 'phone', sortType: 'alphanumeric' },
      { Header: 'Գործողություն', accessor: 'status' },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<ICompanyList>(
    { columns, data },
    useSortBy
  );

  return (
    <>
      <table {...getTableProps()} className="w-full">
        <Thead headerGroups={headerGroups} />
        <Tbody
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
          setOpenApprove={setOpenApprove}
          setOpenReject={setOpenReject}
        />
      </table>
    </>
  );
};

export default DataTable;
