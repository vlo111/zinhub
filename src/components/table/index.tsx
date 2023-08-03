import React from 'react';
import { useTable, Column, useSortBy } from 'react-table';
import { ICompanyList } from '@/api/company/use-get-all-company';
import Thead from '@/components/table/thead';
import Tbody from '@/components/table/tbody';

interface IColumns {
  Header: string;
  accessor: keyof ICompanyList;
  sortType?: string;
}

interface DataTableProps {
  data: ICompanyList[];
  setOpenApprove: React.Dispatch<React.SetStateAction<string>>;
  setOpenReject: React.Dispatch<React.SetStateAction<string>>;
  column: IColumns[];
}

const DataTable = ({ data, column, setOpenApprove, setOpenReject }: DataTableProps) => {
  const columns: Column<ICompanyList>[] = React.useMemo(() => column, [column]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

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
