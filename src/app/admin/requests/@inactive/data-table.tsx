import React from 'react';
import { useTable, Column, useSortBy } from 'react-table';
import { ICompanyList } from '@/api/company/use-get-all-company';
// import { default as ArrowUpSvg } from './icons/up.svg';
// import { default as ArrowDownSvg } from './icons/down.svg';

interface DataTableProps {
  data: ICompanyList[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  // Columns configuration
  const columns: Column<ICompanyList>[] = React.useMemo(
    () => [
      { Header: 'Անվանում', accessor: 'name', sortType: 'bas  ic' },
      { Header: 'ՀՎՀՀ', accessor: 'taxAccount', sortType: 'alphanumeric' },
      { Header: 'Ստեղծման ամսաթիվ', accessor: 'createdAt', sortType: 'alphanumeric' },
      { Header: 'Հեռախոս', accessor: 'phone', sortType: 'alphanumeric' },
      { Header: 'Գործողություն', accessor: 'status', sortType: 'alphanumeric' },
    ],
    []
  );

  // Create a table instance using react-table hooks
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable<ICompanyList>(
    { columns, data },
    useSortBy
  );

  return (
    <>
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id}
              className="border-b border-b-[#0000000f] bg-[#0000000f]"
            >
              {headerGroup.headers.map((column) => (
                <th align="left" key={column.id} className="p-4">
                  {column.render('Header')}
                  {/*<span>{column.isSorted ? column.isSortedDesc ? <ArrowDownSvg /> : <ArrowUpSvg /> : ''}</span>*/}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id} className="border-b border-b-[#0000000f]">
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className="p-4" key={cell.row.id + cell.column.id}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
/*
  {...column.getHeaderProps(column.getSortByToggleProps())}
*/
